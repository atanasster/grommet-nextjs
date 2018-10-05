const routes = require('next-routes')();

routes.add({ name: 'examples', pattern: '/examples/:group?/:example?', page: '/examples' });

module.exports = routes;
