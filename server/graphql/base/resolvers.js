const { GraphQLDate, GraphQLTime, GraphQLDateTime } = require('graphql-iso-date');

module.exports = () => ({
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
});
