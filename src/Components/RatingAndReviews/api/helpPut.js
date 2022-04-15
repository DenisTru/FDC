const axios = require('axios');

const options = function options(reviewId) {
  return {
    url: `/reviews/${reviewId}/helpful`,
    method: 'put',
  };
};

const helpPut = function helpPut(reviewId) {
  options(reviewId).params = {
    review_id: reviewId,
  };
  axios(options(reviewId));
};

module.exports = helpPut;
