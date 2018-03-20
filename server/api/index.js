const { Router } = require('express');
const orderBook = require('./order_book');

// eslint-disable-next-line no-unused-vars
module.exports = (config) => {
  const router = Router();
  router.get('/order_book/:exchange/:symbol/:toSymbol', orderBook);
  return router;
};
