const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./src/schema");

const { PORT } = require("./util/process");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
