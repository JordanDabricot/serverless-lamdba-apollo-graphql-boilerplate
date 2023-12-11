const { ApolloServer } = require('@apollo/server');
const { startServerAndCreateLambdaHandler, handlers } = require('@as-integrations/aws-lambda');
const { readFileSync } = require('fs');
const gql = require('graphql-tag');
const { resolvers } = require('./resolvers.js');

// Fetching the schema
const schema = readFileSync('src/schema.graphql');
const typeDefs = gql`
    ${schema.toString()}
`;

const apolloServer = new ApolloServer({ typeDefs, resolvers });

// Create the Lambda function
module.exports.handler = startServerAndCreateLambdaHandler(
  apolloServer,
  // We will be using the Proxy V2 handler
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
);