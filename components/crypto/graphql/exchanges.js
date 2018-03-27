import gql from 'graphql-tag';

export const allExchangesQuery = gql`
  query getExchanges {
    allExchanges {
      id
      name
      logo
      countries
      url
    }
  }
`;


export const exchangeInfoQuery = gql`
  query getExchange($exchange : String!) {
    exchange(exchange: $exchange) {
      id
      name
      logo
    }
  }
`;

export const exchangeMarketsQuery = gql`
  query getExchange($exchange : String!) {
    exchange(exchange: $exchange) {
      id
      name
      currencies {
        code
        precision
        coin {
          symbol
          imageUrl
          fullName
        }
      }
      markets {
        base
        quote
        darkpool
        maker
        taker
      }
    }
  }
`;


export const orderBookQuery = gql`
  query getOrderBook($exchange : String!, $symbol: String, $toSymbol: String, $start: Int, $limit: Int) {
    orderBook(exchange: $exchange, symbol: $symbol, toSymbol: $toSymbol, start: $start, limit: $limit) {
      symbol
      last_updated
      asks {
        price
        qty
      }
      bids {
        price
        qty
      }
    }
  }
`;
