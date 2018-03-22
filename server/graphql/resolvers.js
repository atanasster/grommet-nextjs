const fetch = require('isomorphic-unfetch');
const allCoins = require('../models/coins');
const { exchanges } = require('../models/exchanges');

const coinSynonyms = {
  MIOTA: 'IOTA',
};

const findCoin = (symbol) => {
  const coin = allCoins().find(item =>
    item.symbol === symbol || item.symbol === coinSynonyms[symbol]);
  return coin || { symbol };
};

const resolvers = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    coin(root, { symbol }) {
      return findCoin(symbol);
    },
    allCoins() {
      return allCoins();
    },
    allExchanges() {
      return exchanges();
    },
    exchange(root, { id }) {
      const exchange = exchanges().find(item => item.id === id);
      // console.log(exchange);
      return exchange || { id };
    },
    priceHistory(root, {
      symbol, toSymbol, exchange, period = 'day', limit = 60,
    }) {
      return fetch(`https://min-api.cryptocompare.com/data/histo${period}?fsym=${symbol}&tsym=${toSymbol}&limit=${limit}&aggregate=3&e=${exchange}`)
        .then(res => res.json())
        .then(res => res.Data);
    },
    marketCap(root, {
      currency, start = 0, limit = 60,
    }) {
      return fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${currency}&start=${start}&limit=${limit}`)
        .then(res => res.json())
        .then(res => (res.map(item => ({
          'rank': item.rank,
          'symbol': item.symbol,
          'volume_24h_usd': item['24h_volume_usd'],
          'price_usd': item.price_usd,
          'market_cap_usd': item.market_cap_usd,
          'price_btc': item.price_btc,
          'last_updated': item.last_updated,
          'available_supply': item.available_supply,
          'price': item[`price_${currency}`],
          'market_cap': item[`market_cap_${currency}`],
          'volume_24h': item[`24h_volume_${currency}`],
          'percent_change_1h': item.percent_change_1h,
          'percent_change_24h': item.percent_change_24h,
          'percent_change_7d': item.percent_change_7d,
          'total_supply': item.total_supply,
          'coin': findCoin(item.symbol),
        }))));
    },
  },
};

module.exports = resolvers;
