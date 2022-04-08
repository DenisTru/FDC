const axios = require('axios');
<<<<<<< HEAD
const config = require('../../config');
=======
const config = require('./config');
>>>>>>> main

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
  headers: {
<<<<<<< HEAD
    Authorization: config.default.TOKEN,
=======
    Authorization: config.TOKEN,
>>>>>>> main
  },
  method: 'get',
};

const getReviews = function getReviews(page, count, sort, productId) {
  options.params = {
    page,
    count,
    sort,
    product_id: productId,
  };
  return axios(options);
};

module.exports = getReviews;
