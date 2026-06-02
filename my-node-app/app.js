const express = require('express');
const bodyParser = require('body-parser');
const { postgraphile } = require("postgraphile");

const app = express();
const port = 4000;

app.use(
  postgraphile(
    "postgres://useradmin:admin@localhost:5432/Users",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
    },
  ),
);

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // auto calls next() after parsing

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
