const axios = require('axios');
const config = require('./config');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
  headers: {
    Authorization: config.TOKEN,
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
