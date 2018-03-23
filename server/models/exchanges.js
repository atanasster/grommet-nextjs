const ccxt = require('ccxt');
const { sleep } = require('../api/utils');

if (!process.browser) {
  const baseExchangeInfo = (exchange) => {
    const countries = typeof exchange.countries === 'string' ? [exchange.countries] : exchange.countries;
    let url;
    if (exchange.urls && exchange.urls.www) {
      if (typeof exchange.urls.www === 'string') {
        url = [exchange.urls.www];
      } else {
        url = exchange.urls.www;
      }
    }
    return {
      id: exchange.id,
      name: exchange.name,
      logo: exchange.urls ? exchange.urls.logo : null,
      url,
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
  module.exports.exchangeObj = (exchange) => {
    const exch = exchanges.find(item => item.name === exchange);
    if (exch) {
      return new ccxt[exch.id]();
    }
    return null;
  };
  module.exports.exchanges = () => (exchanges);
}

