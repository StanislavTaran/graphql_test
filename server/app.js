const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schemas/schema");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3005;

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@cluster0.djmgu.mongodb.net/gql?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);
app.use(cors());

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const dbConnection = mongoose.connection;

dbConnection.on("error", e => console.log(`Connection Error: ${e}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

app.listen(PORT);
console.log("Server started...");
