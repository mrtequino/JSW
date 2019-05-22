const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

const { makeExecutableSchema } = require("graphql-tools");

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling",
    paginas: 299,
    descripcion: "descripción"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    paginas: 252
  }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books1: [Book] }
  type Book { title: String, author: String, paginas: Int, descripcion: String }
  type Mutation {addBook(title:String):Book}
`;

// The resolvers
const resolvers = {
  Query: {
    books1: () => books
  },
  Mutation: {
    addBook: () => addBook()
  }
};

function addBook(title) {
  let obj = {};
  obj.title = title;
  obj.author = "Diego";
  return obj;
}

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Initialize the app
const app = express();

app.use(cors());

// The GraphQL endpoint
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema
  })
);

// GraphiQL, a visual editor for queries
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

// Start the server
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/graphiql to run queries!");
});
