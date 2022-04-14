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

// GREAT JOB TEAM VENUS!!!!!!!!!!!!!!!
const getProductInfo = function getProductInfo(productId) {
  // Testinng the server post request
  // axios.post('/getProductInfo', { productId })
  //   .then((data) => console.log('post sent: data = ', data));
  // Below, the applicationn runs normally
  const options = {
    url: `/products/${productId}`,
    method: 'get',
  };
  return axios(options);
};

module.exports = {
  getRelatedProductIds, getRelatedProductInfo, getRelatedProductStyles, getProductInfo,
};
