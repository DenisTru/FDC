const axios = require('axios');

const options = {
  url: '/reviews',
  method: 'post',
};

const newReviewsPost = function newReviewsPost(newReviews) {
  options.data = newReviews;
  return axios(options);
};

module.exports = newReviewsPost;
