const ccxt = require('ccxt');
const { sleep } = require('../api/utils');

if (!process.browser) {
  const baseExchangeInfo = (exchange) => {
    const countries = typeof exchange.countries === 'string' ? [exchange.countries] : exchange.countries;
    return {
      id: exchange.id,
      name: exchange.name,
      logo: exchange.urls ? exchange.urls.logo : null,
      url: exchange.urls ? exchange.urls.www : null,
      hasOrderBook: exchange.has.fetchOrderBook,
      countries: countries.map(c => (c === 'UK' ? 'GB' : c)),
      fees: exchange.fees,
      currencies: exchange.currencies,
      markets: exchange.markets,
    };
  };

  const exchanges = ccxt.exchanges.map((exchangeId) => {
    const exchange = new ccxt[exchangeId]();
    exchange.loadMarkets()
    // eslint-disable-next-line no-unused-vars
      .then((markets) => {
        // console.log(markets);
      })
      .catch(() => {
        console.log('ERROR : loadMarkets', exchangeId);
        return sleep();
      });
    return baseExchangeInfo(exchange);
  });
  module.exports.exchanges = () => (exchanges);
}

