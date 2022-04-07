const axios = require('axios');
const config = require('./config');

const options = function options(reviewId) {
  return {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${reviewId}/helpful`,
    headers: {
      Authorization: config.TOKEN,
    },
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
