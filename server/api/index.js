const { Router } = require('express');
const { exchangesList, exchangeInfo } = require('./exchanges');
const orderBook = require('./order_book');
const coins = require('./coins');

// eslint-disable-next-line no-unused-vars
module.exports = (config) => {
  const router = Router();
  router.use('/exchanges/:exchange', exchangeInfo);
  router.use('/exchanges', exchangesList);
  router.get('/order_book/:exchange/:symbol/:toSymbol', orderBook);
  router.use('/coins', coins);
  return router;
};
