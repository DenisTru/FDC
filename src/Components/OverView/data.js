const axios = require('axios');
const config = require('./config');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/',
  headers: {
    Authorization: config.TOKEN,
  },
  method: 'get',
};

const optionsStyles = {
  headers: {
    Authorization: config.TOKEN,
  },
  method: 'get',
};

const getProductStyles = function getProductStyles(productId) {
  optionsStyles.params = {
    product_id: productId,
  };
  return axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${productId}/styles`, optionsStyles);
};

const getProduct = function getProduct(productId) {
  options.params = {
    product_id: productId,
  };
  return axios(options);
};

module.exports.getProduct = getProduct;
module.exports.getProductStyles = getProductStyles;
