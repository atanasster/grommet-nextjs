const list = require('../models/exchanges');

module.exports.exchangesList = (req, res) => {
  res.json({ data: list });
};


module.exports.exchangeInfo = (req, res) => {
  const { exchange: exchangeName } = req.params;
  const exchange = list.exchangeByName(exchangeName);
  if (!exchange) {
    res.status(404)
      .send(`Could not find exchange ${exchangeName}`);
  } else {
    res.json({ data: exchange });
  }
};
