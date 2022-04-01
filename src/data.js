const axios = require('axios');
const config = require('../config');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products',
  headers: {
    Authorization: config.TOKEN,
  },
  method: 'get',
};

let data;

axios(options).then((res) => {
  data = res.data;
  console.log(data);
});

module.exports = data;
