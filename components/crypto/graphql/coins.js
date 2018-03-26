import gql from 'graphql-tag';

export const coinInfoQuery = gql`
  query getCoin($symbol : String!) {
    coin(symbol: $symbol) {
      symbol
      imageUrl
      fullName
    }
  }
`;

const ICOFields = `
ICO {
  description
  status
  blogLink
  websiteURL
  whitePaperLink
  features
  tokenType
  fundingTarget
  startPrice
  startPriceCurrency
  fundsRaisedList
  tokenPercentageForInvestors
  tokenReserveSplit
  tokenSupply
  tokenSupplyPostICO
  fundingCap
  fundsRaisedUSD
  jurisdiction
  legalAdvisers
  legalForm
  paymentMethod {
    symbol
  }
}
`;

export const coinDetailsQuery = gql`
  query getCoin($symbol : String!) {
    coin(symbol: $symbol) {
      symbol
      imageUrl
      fullName
      description
      messages {
        message
        type
      }
      ${ICOFields}
    }
  }
`;

export const priceHistoryQuery = gql`
  query getPriceHistory($symbol : String!, $toSymbol : String!, $exchange: String!, $period: String, $limit: Int) {
    priceHistory(symbol: $symbol, toSymbol: $toSymbol, exchange: $exchange, period: $period, limit: $limit) {
      time
      close
      high
      low
      open
      volumefrom
      volumeto
    }
  }
`;


export const allCoinsQuery = gql`
  query getCoins {
    allCoins {
      symbol
      imageUrl
      fullName
      algorithm
      proofType
      fullyPremined
      preMinedValue
      totalCoinSupply
      totalCoinsFreeFloat
      ${ICOFields}
    }
  }
`;

export const allICOQuery = gql`
  query getICOCoins {
    allICO {
      symbol
      imageUrl
      fullName
      algorithm
      proofType
      fullyPremined
      preMinedValue
      totalCoinSupply
      totalCoinsFreeFloat
      ${ICOFields}
    }
  }
`;

export const marketCapQuery = gql`
   query getMarketCap($currency : String!, $start: Int, $limit: Int) {
    marketCap(currency: $currency, start: $start, limit: $limit) {
      rank
      symbol
      last_updated
      price_usd
      volume_24h_usd
      market_cap_usd
      price_btc
      available_supply
      total_supply
      price
      market_cap
      volume_24h
      percent_change_1h
      percent_change_24h
      percent_change_7d
      coin {
        symbol
        imageUrl
        fullName
      }
    }
  }
`;
