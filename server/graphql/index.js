const { graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { PubSub } = require('graphql-subscriptions');
const base = require('./base');
const crypto = require('./crypto');
const auth = require('./auth');
const CombineModules = require('./combineModules');

const pubsub = new PubSub();

const modules = [base, crypto, auth];

const combinedProps = new CombineModules(modules);


module.exports = async (req, res, next) => {
  try {
    const context = await combinedProps.createContext(req, res);
    graphqlExpress(() => ({
      schema: makeExecutableSchema({
        typeDefs: combinedProps.typeDefs,
        resolvers: combinedProps.resolvers(pubsub),
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
