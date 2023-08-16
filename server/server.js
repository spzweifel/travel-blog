const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth.js");

const PORT = process.env.PORT || 3001;

const app = express(); // Declare app here

// Create instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const startApolloServer = async () => {
  await server.start();

  server.applyMiddleware({ app });

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  db.once("open", () => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}/graphql`)
    );
  });
};

startApolloServer();