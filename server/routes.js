const routes = require('next-routes')();

routes.add('signin', '/sign_in');
routes.add('signup', '/sign_up');

module.exports = routes;
