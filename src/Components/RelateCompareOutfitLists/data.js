const axios = require('axios');

const getRelatedProductIds = function getRelatedProductIds(productId) {
  const options = {
    url: `/products/${productId}/related`,
    method: 'get',
  };

  return axios(options);
};

const getRelatedProductInfo = function getRelatedProductInfo(productId) {
  const options = {
    url: `/products/${productId}`,
    method: 'get',
  };

  return axios(options);
};

const getRelatedProductStyles = function getRelatedProductStyles(productId) {
  const options = {
    url: `/products/${productId}/styles`,
    method: 'get',
  };

  return axios(options);
};

const getProductInfo = function getProductInfo(productId) {
  const options = {
    url: `/products/${productId}`,
    method: 'get',
  };
  return axios(options);
};

module.exports = {
  getRelatedProductIds, getRelatedProductInfo, getRelatedProductStyles, getProductInfo,
};
