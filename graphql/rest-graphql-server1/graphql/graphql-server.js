const { ApolloServer, gql } = require("apollo-server-express");
//const { gql } = require("apollo-server");

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

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
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books
  }
};

//función de contexto
var contextoGraphql = ({ req }) => {
  // get the user token from the headers
  const token = req.headers.authorization || "";

  // try to retrieve a user with the token
  //const user = getUser(token);

  // optionally block the user
  // we could also check user roles/permissions here
  //if (!user) throw new AuthorizationError("you must be logged in");

  if (!token) throw new Error("you must be logged in");

  // add the user to the context
  return { token };
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: contextoGraphql,
  introspection: true,
  playground: true
});

module.exports = {
  apolloServer
};

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
//server.listen().then(({ url }) => {
//  console.log(`🚀  Server ready at ${url}`);
//});
