const routes = require('next-routes')();

routes.add({ name: 'examples', pattern: '/examples/:group?/:example?', page: '/examples' });
routes.add({ name: 'documentation', pattern: '/documentation/:component', page: '/documentation' });

module.exports = routes;
