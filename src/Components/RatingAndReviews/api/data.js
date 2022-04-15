const axios = require('axios');

const options = {
  url: '/reviews',
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
