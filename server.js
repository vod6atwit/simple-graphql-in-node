const path = require('path');
const express = require('express');
// const { buildSchema } = require('graphql');
// const { graphqlHTTP } = require('express-graphql');
const { ApolloServer } = require('apollo-server-express');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

// looking .graphql files in dir/subdir
const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  // calling app.use on the middleware created inside apollo server mounting to the path
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(3000, () => {
    console.log('Running GraphQL server on port 3000 ...');
  });
}

startApolloServer();

// const root = {
//   products: require('./products/products.model'),
//   orders: require('./orders/orders.model'),
// };

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     // rootValue: root,
//     graphiql: true,
//   })
// );
