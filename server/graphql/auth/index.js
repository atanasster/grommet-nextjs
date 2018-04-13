const jwt = require('jsonwebtoken');
const resolvers = require('./resolvers');
const scopes = require('./scopes');
const readSchema = require('../readSchema');
const password = require('./password');
const facebook = require('./facebook');
const google = require('./google');
const linkedin = require('./linkedin');
const github = require('./github');
const CombineModules = require('../combineModules');
const confirmEmail = require('./confirm_email');


const getCurrentUser = async ({ req }) => {
  const authorization = req && req.headers.authorization;
  const parts = authorization && authorization.split(' ');
  const token = parts && parts.length === 2 && parts[1];

  if (token) {
    try {
      const { user } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return user;
    } catch (e) {
      // console.log('JWT CONTEXT ', e);
      return undefined;
    }
  }
  return undefined;
};

const createContext = async (req, res, context, connectionParams, webSocket) => {
  const user = context.user || (await getCurrentUser({ req, connectionParams, webSocket }));
  const auth = {
    isAuthenticated: !!user,
    scope: user ? scopes[user.role] : null,
  };

  return {
    user,
    auth,
  };
};

const props = {
  typeDefs: readSchema(__dirname),
  resolvers,
  createContext,
  middleware: (app) => {
    app.get('/confirmation/:token', confirmEmail);
  },
};

// module.exports = props;
module.exports = new CombineModules([props, password, facebook, google, linkedin, github]);
