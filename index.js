const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { products, categories, reviews } = require("./db");
const { Mutation } = require("./resolvers/Mutation");
// const { Category, Query, Product } = require("./resolver/");
const resolvers = {};
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category, Mutation },
  context: { products, categories, reviews },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
