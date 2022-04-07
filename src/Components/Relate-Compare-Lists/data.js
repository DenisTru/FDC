const axios = require('axios');
const config = require('../../../config');

const getRelatedProductIds = function getRelatedProductIds(productId) {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${productId}/related`,
    headers: {
      Authorization: config.TOKEN,
    },
    method: 'get',
  };

  return axios(options);
};

const getRelatedProductInfo = function getRelatedProductInfo(productId) {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${productId}`,
    headers: {
      Authorization: config.TOKEN,
    },
    method: 'get',
  };

  return axios(options);
};

module.exports = { getRelatedProductIds, getRelatedProductInfo };
