const fetch = require('isomorphic-unfetch');
const allCoins = require('../models/coins');
const { exchanges } = require('../models/exchanges');


const resolvers = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    coin(root, { symbol }) {
      const coin = allCoins().find(item => item.symbol === symbol);
      return coin || { symbol };
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

  },
};

module.exports = resolvers;
