const fs = require('fs');
const path = require('path');

module.exports = (dirname, fileName = 'schema.graphql') => fs.readFileSync(path.join(dirname, fileName), 'utf8');
