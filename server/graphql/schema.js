const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');


const typeDefs = `
type Query {
  coin(symbol: String): Coin
  allCoins: [Coin]
  allExchanges : [Exchange]
  exchange(id: String): Exchange
  priceHistory(symbol: String, toSymbol: String, exchange: String, period: String, limit: Int): [PriceHistory]
}
type Coin {
  algorithm: String
  coinName: String
  fullName: String
  fullyPremined: String
  id: String
  imageUrl: String
  name: String
  preMinedValue: String
  proofType: String
  sortOrder: String
  sponsored: String
  symbol: String
  totalCoinSupply: String
  totalCoinsFreeFloat: String
  url: String
}

type TradingFees {
  tierBased: Boolean
  percentage: Boolean
  taker: Float
  maker: Float
  tiers: [String] 
}

type FundingFees { 
  tierBased: Boolean
  percentage: Boolean
  withdraw: [String]
  deposit: [String]
} 
 

type Fees {
  trading: TradingFees
  funding: FundingFees
}
  
type Exchange {
  id: String
  name: String
  logo: String
  url: String
  hasOrderBook: Boolean
  countries: [String]
  fees: Fees
  currencies: String
  markets: String
}

type PriceHistory{
  time: Int
  close: Float
  high: Float
  low: Float
  open: Float
  volumefrom: Float
  volumeto: Float
}
`;


const schema = makeExecutableSchema({ typeDefs, resolvers });


module.exports = schema;
