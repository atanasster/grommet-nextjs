const { graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { PubSub } = require('graphql-subscriptions');
const modules = require('./index');

const pubsub = new PubSub();

module.exports = async (req, res, next) => {
  try {
    const context = await modules.createContext(req, res);
    graphqlExpress(() => ({
      schema: makeExecutableSchema({
        typeDefs: modules.typeDefs,
        resolvers: modules.resolvers(pubsub),
      }),
      context: { ...context, req, res },
      debug: false,
      tracing: !!process.env.ENGINE_API_KEY,
      cacheControl: !!process.env.ENGINE_API_KEY,
    }))(req, res, next);
  } catch (e) {
    next(e);
  }
};
