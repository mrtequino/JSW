const { gql } = require("apollo-server-express");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
  }

  # (A "Mutation" type will be covered later on.)
  type Mutation {
    login(username: String!, password: String!): String
  }
`;

module.exports = {
  typeDefs
};
