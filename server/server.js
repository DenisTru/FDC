const axios = require('axios');
const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');

// const urlencodedParser = bodyParser.urlencoded({ extended: true });
require('dotenv').config();

const { PORT, TOKEN } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(urlencodedParser);
// app.use(bodyParser.json());

app.use('*', (req, res) => {
  const { method } = req;
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc${req.originalUrl}`;
  const headers = { Authorization: TOKEN };
  const data = req.body;
  axios({
    method, url, headers, data,
  }).then((result) => { res.send(result.data); })
    .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

// Instead consider setting up a wildcard route, "/*" which is capable of capturing
// the req.method and req.url from the incoming request, attaching the Authentication header,
// and making the same request to the API server,
// before capturing the response data and sending it back to the client.
