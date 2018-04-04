import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';
import JWTLink from '../components/crypto/auth/jwLink';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  let link;
  const httpLink = createHttpLink({
    uri: `${process.browser ? '' : process.env.WEBSITE_URL}/graphql`, // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  });
  if (process.browser) {
    link = JWTLink.concat(httpLink);
  } else {
    link = httpLink;
  }
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState, config) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, config);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, config);
  }

  return apolloClient;
}
