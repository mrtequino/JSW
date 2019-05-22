const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
//const { gql } = require("apollo-server");

//función de contexto
var contextoGraphql = ({ req }) => {
  // get the user token from the headers
  const token = req.headers.authorization || "";

  if (req.body.operationName === "login") {
    return;
    //return { usuario: "usuario-dp" };
  }
  if (!token)
    // try to retrieve a user with the token
    //const user = getUser(token);

    // optionally block the user
    // we could also check user roles/permissions here
    //if (!user) throw new AuthorizationError("you must be logged in");

    throw new Error("you must be logged in");

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
