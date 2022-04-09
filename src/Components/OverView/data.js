const axios = require('axios');
const config = require('./config');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/',
  headers: {
    Authorization: config.TOKEN,
  },
  method: 'get',
};

const getProduct = function getProduct(productId) {
  options.params = {
    product_id: productId,
  };
  return axios(options);
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

const addToCartPOST = function addToCart(productId) {
  return axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart', {
    headers: {
      Authorization: config.TOKEN,
    },
    method: 'POST',
    data: { sku_id: productId },
  });
};

const addToCartDELETE = function addToCart() {
  return axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart');
};

module.exports.addToCartDELETE = addToCartDELETE;
module.exports.addToCartPOST = addToCartPOST;
module.exports.getProduct = getProduct;
module.exports.getProductStyles = getProductStyles;
