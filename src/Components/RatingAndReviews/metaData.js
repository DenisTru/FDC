const axios = require('axios');
const config = require('../../../config');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta',
  headers: {
    Authorization: config.TOKEN,
  },
  method: 'get',
};

const getMetaReviews = function getMetaReviews(productId) {
  options.params = {
    product_id: productId,
  };
  return axios(options);
};

module.exports = getMetaReviews;
