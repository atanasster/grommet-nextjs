
module.exports.symbolParities = {
  'USD': 'USDT',
  'USDT': 'USD',
  'EUR': 'EURT',
  'EURT': 'EUR',
};

module.exports.sleep = (ms = 4000) => new Promise(resolve => setTimeout(resolve, ms));
