const fetch = require('isomorphic-unfetch');
const { coins } = require('./models/coins');
const { exchanges, exchangeObj } = require('./models/exchanges');
const { symbolParities } = require('./utils');

const coinSynonyms = {
  MIOTA: 'IOTA',
};

const findCoin = (symbol) => {
  const coin = coins().find(item =>
    item.symbol === symbol || item.symbol === coinSynonyms[symbol]);
  return coin || { symbol };
};


const findExchange = exchange => exchanges()
  .find(item => item.id === exchange || item.name === exchange) || { id: exchange, name: exchange };

const resolvers = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    coin(root, { symbol }) {
      return findCoin(symbol);
    },
    allCoins() {
      return coins();
    },
    allICO() {
      return coins().filter(coin => (coin.ICO && coin.ICO.status !== 'Finished' && coin.ICO.date !== 0));
    },
    allExchanges() {
      return exchanges();
    },
    exchange(root, { exchange: exchangeName }) {
      const exchange = findExchange(exchangeName);
      if (exchange && !exchange.coinsLinked) {
        exchange.coinsLinked = true;
        if (exchange.currencies) {
          exchange.currencies = exchange.currencies.map(currency => (
            { ...currency, coin: findCoin(currency.code) }
          ));
        }
        if (exchange.fees && exchange.fees.funding && exchange.fees.funding.withdraw) {
          exchange.fees.funding.withdraw = exchange.fees.funding.withdraw.map(fee => (
            { ...fee, coin: findCoin(fee.symbol) }
          ));
        }
        if (exchange.fees && exchange.fees.funding && exchange.fees.funding.deposit) {
          exchange.fees.funding.deposit = exchange.fees.funding.deposit.map(fee => (
            { ...fee, coin: findCoin(fee.symbol) }
          ));
        }
      }
      return exchange;
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
    orderBook(root, {
      exchange, symbol, toSymbol, start = 0, limit = 30,
    }) {
      const exch = exchangeObj(exchange);
      if (!exch) {
        throw new Error(`Could not find exchange ${exchange}`);
      }
      if (!exch.has.fetchOrderBook) {
        throw new Error(`Exchange ${exchange} has no fetchOrderBook`);
      }
      return exch.fetchOrderBook(`${symbol}/${toSymbol}`)
        .then(orderBook => ({
          last_updated: orderBook.timestamp,
          asks: orderBook.asks.slice(start, limit).map(item =>
            ({ price: item[0], qty: item[1] })),
          bids: orderBook.bids.slice(start, limit).map(item =>
            ({ price: item[0], qty: item[1] })),
          symbol,
          realToSymbol: toSymbol,
        }))
        .catch((e) => {
          if (symbolParities[toSymbol]) {
            return exch.fetchOrderBook(`${symbol}/${symbolParities[toSymbol]}`)
              .then(orderBook => ({
                last_updated: orderBook.timestamp,
                asks: orderBook.asks.slice(start, limit)
                  .map(item => ({ price: item[0], qty: item[1] })),
                bids: orderBook.bids.slice(start, limit)
                  .map(item => ({ price: item[0], qty: item[1] })),
                symbol,
                realToSymbol: symbolParities[toSymbol],
              }))
              .catch(() => {
                throw new Error(`Could not fetch ${symbolParities[toSymbol]} Order Book for ${exchange}`);
              });
          }
          return e;
        });
    },
  },
};

module.exports = resolvers;
