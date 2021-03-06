const { login } = require("../service/seguridad");

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

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    login: async (_, { username, password }, context) => {
      return login(username, password);
      //return username + " - " + password + ": " + JSON.stringify(context);
      //return args.username + " " + args.password;
    }
  }
};

module.exports = {
  resolvers
};
