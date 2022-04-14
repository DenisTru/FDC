const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
// other configuration...

app.listen(3001, () => {
  console.log('listening on port 3001!');
});

// Instead consider setting up a wildcard route, "/*" which is capable of capturing
// the req.method and req.url from the incoming request, attaching the Authentication header,
// and making the same request to the API server,
// before capturing the response data and sending it back to the client.
