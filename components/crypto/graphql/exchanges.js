import gql from 'graphql-tag';

export const allExchangesQuery = gql`
  query getExchanges {
    allExchanges {
      id,
      name,
      logo,
      countries
    }
  }
`;


export const exchangeInfoQuery = gql`
  query getExchange($id : String!) {
    coin(id: $id) {
      id
      name
      logo
    }
  }
`;
