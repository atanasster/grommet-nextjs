const resolvers = require('./resolvers');
const readSchema = require('../../readSchema');

module.exports = {
  typeDefs: readSchema(__dirname),
  resolvers,
};
