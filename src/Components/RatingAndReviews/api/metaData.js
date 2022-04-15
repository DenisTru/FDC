const axios = require('axios');

const options = {
  url: '/reviews/meta',
  method: 'get',
};

const getMetaReviews = function getMetaReviews(productId) {
  options.params = {
    product_id: productId,
  };
  return axios(options);
};

module.exports = getMetaReviews;
