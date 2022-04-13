const axios = require('axios');
const config = require('../config');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
  headers: {
    Authorization: config.TOKEN,
  },
  method: 'post',
};

const newReviewsPost = function newReviewsPost(newReviews) {
  options.data = newReviews;
  return axios(options);
};

module.exports = newReviewsPost;
