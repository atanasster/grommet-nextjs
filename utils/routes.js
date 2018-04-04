const routes = require('next-routes')();

const SITE_ROOT = '/crypto-grommet';
module.exports.SITE_ROOT = SITE_ROOT;

routes.add({ name: 'home', pattern: `${SITE_ROOT}`, page: `${SITE_ROOT}` });
routes.add('coin_info', '/coins/general/:symbol/:toSymbol?/:exchange?', `${SITE_ROOT}/coins/general`);
routes.add('coin_order_books', '/coins/orderbooks/:symbol/:toSymbol?/:exchange?', `${SITE_ROOT}/coins/orderbooks`);
routes.add('coin_charts', '/coins/charts/:symbol/:toSymbol?/:exchange?', `${SITE_ROOT}/coins/charts`);
routes.add('reset_password', '/reset-password/:token', `${SITE_ROOT}/reset_password`);
routes.add('profile', '/profile', `${SITE_ROOT}/user/profile`);

routes.add('exchange_prices', '/exchanges/prices/:exchange', `${SITE_ROOT}/exchanges/prices`);
routes.add('exchange_order_books', '/exchanges/orderbooks/:exchange', `${SITE_ROOT}/exchanges/orderbooks`);

routes.add('exchange_currencies', '/exchanges/currencies/:exchange', `${SITE_ROOT}/exchanges/currencies`);
routes.add('exchange_fees', '/exchanges/fees/:exchange', `${SITE_ROOT}/exchanges/fees`);


routes.add({ name: 'markets', page: `${SITE_ROOT}/markets` });
routes.add({ name: 'about', page: `${SITE_ROOT}/about` });
routes.add({ name: 'login', page: `${SITE_ROOT}/login` });
routes.add({ name: 'markets_distribution', page: `${SITE_ROOT}/markets/distribution` });
routes.add({ name: 'world_exchanges', page: `${SITE_ROOT}/exchanges/worldmap` });
routes.add({ name: 'exchanges', page: `${SITE_ROOT}/exchanges` });
routes.add({ name: 'coins_list', page: `${SITE_ROOT}/coins` });
routes.add({ name: 'coins_icos', page: `${SITE_ROOT}/coins/icos` });


module.exports = routes;
