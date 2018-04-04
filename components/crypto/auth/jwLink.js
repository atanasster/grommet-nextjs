import { ApolloLink, Observable } from 'apollo-link';
import initApollo from '../../../apollo/initApollo';
import { store } from '../../../redux';
import { setTokens, signOut } from '../../../redux/auth/actions';
import REFRESH_TOKENS_MUTATION from './graphql/RefreshTokens.graphql';

const setJWTContext = async (operation) => {
  const { accessToken } = store.getState().auth;
  if (!accessToken) {
    return null;
  }
  return operation.setContext(context => ({
    ...context,
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : null,
    },
  }));
};

const isTokenRefreshNeeded = async (operation, result) => {
  let needRefresh = false;
  const { refreshToken } = store.getState().auth;
  if (refreshToken && operation.operationName !== 'refreshTokens') {
    if (result.errors) {
      needRefresh = result.errors.find(error => (error.message && error.message.indexOf('Not Authenticated') >= 0));
    } else if (operation.operationName === 'currentUser' && result.data.currentUser === null) {
      // We have refresh token here, and empty current user received as a network request result,
      // it means we need to refresh tokens
      needRefresh = true;
    }
  }
  return needRefresh;
};

const JWTLink = new ApolloLink((operation, forward) => new Observable((observer) => {
  let sub;
  let retrySub;
  (async () => {
    if (['login', 'refreshTokens'].indexOf(operation.operationName) < 0) {
      await setJWTContext(operation);
    }
    try {
      sub = forward(operation).subscribe({
        next: async (result) => {
          let retry = false;
          if (operation.operationName !== 'login' && await isTokenRefreshNeeded(operation, result)) {
            try {
              const client = initApollo();
              const { data: { refreshTokens: { accessToken, refreshToken } } } =
                await client.mutate({
                  mutation: REFRESH_TOKENS_MUTATION,
                  variables: { refreshToken: store.getState().auth.refreshToken },
                });
              console.log('DID REFRESH', accessToken, refreshToken);
              store.dispatch(setTokens({ accessToken, refreshToken }));
              // Retry current operation
              await setJWTContext(operation);
              retrySub = forward(operation).subscribe(observer);
              retry = true;
            } catch (e) {
              // We have received error during refresh -
              // drop tokens and return original request result
              await store.dispatch(signOut());
            }
          }
          if (!retry) {
            observer.next(result);
            observer.complete();
          }
        },
        error: observer.error.bind(observer),
        complete: () => {},
      });
    } catch (e) {
      observer.error(e);
    }
  })();

  return () => {
    if (sub) sub.unsubscribe();
    if (retrySub) retrySub.unsubscribe();
  };
}));

export default JWTLink;
