const routes = require('next-routes')();

const SITE_ROOT = '/crypto-grommet';
module.exports.SITE_ROOT = SITE_ROOT;

routes.add({ name: 'home', page: `${SITE_ROOT}` });
routes.add('signin', `${SITE_ROOT}/sign_in`);
routes.add('signup', `${SITE_ROOT}/sign_up`);
routes.add('coin_info', '/coins/general/:symbol/:toSymbol?/:exchange?', `${SITE_ROOT}/coins/general`);
routes.add('exchange_prices', '/exchanges/prices/:exchange', `${SITE_ROOT}/exchanges/prices`);
routes.add({ name: 'markets', page: `${SITE_ROOT}/markets` });
routes.add({ name: 'markets_distribution', page: `${SITE_ROOT}/markets/distribution` });
routes.add({ name: 'exchanges', page: `${SITE_ROOT}/exchanges` });
routes.add({ name: 'coins_list', page: `${SITE_ROOT}/coins` });
routes.add({ name: 'coins_icos', page: `${SITE_ROOT}/coins/icos` });


module.exports = routes;
