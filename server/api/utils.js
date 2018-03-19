
module.exports.symbolParities = {
  'USD': 'USDT',
  'USDT': 'USD',
  'EUR': 'EURT',
  'EURT': 'EUR',
};

module.exports.sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms));
