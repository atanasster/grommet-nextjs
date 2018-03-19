const coins = require('../models/coins');

module.exports = (req, res) => {
  res.json({ data: coins() });
};
