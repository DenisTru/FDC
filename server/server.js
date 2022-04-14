const axios = require('axios');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });
require('dotenv').config();

const { PORT, TOKEN } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
// other configuration...

// app.use(express.urlencoded());
app.use(urlencodedParser);
app.use(bodyParser.json());

app.post('/componentClick', (req, res) => {
  const { element, widget, time } = req.body.data;

  axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/interactions', {
    headers: {
      Authorization: TOKEN,
    },
    method: 'POST',
    data: {
      element,
      widget,
      time,
    },
  }).then((data)=>console.log(data));
});

// GET REQUEST FOR PRODUCT INFORMATION
// We need access to the productID
// Send the axios request to the API with the correct Authentication Header
// Recieve the data from the API and remove the authentication from the header
// Send back the data to the client

// `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${productId}`
// app.get('/api/fec2/hr-rfc', (req, res) => {
//   console.log(JSON.stringify(req.body));
//   const { options } = req.body;

//   axios(options)
//     .then((result) => {
//       // remove authorization header from result

//       res.send(result);
//     });
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

// Instead consider setting up a wildcard route, "/*" which is capable of capturing
// the req.method and req.url from the incoming request, attaching the Authentication header,
// and making the same request to the API server,
// before capturing the response data and sending it back to the client.