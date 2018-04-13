const base = require('./base');
const crypto = require('./crypto');
const auth = require('./auth');
const CombineModules = require('./combineModules');

const modules = [base, crypto, auth];

module.exports = new CombineModules(modules);
