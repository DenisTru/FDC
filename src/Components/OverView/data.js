const axios = require('axios');
// const config = require('./config');

const options = {
  url: '/products/',
  method: 'get',
};

const getProduct = function getProduct(productId) {
  options.params = {
    product_id: productId,
  };
  return axios(options);
};

const optionsStyles = {
  method: 'get',
};

const getProductStyles = function getProductStyles(productId) {
  optionsStyles.params = {
    product_id: productId,
  };
  return axios(`/products/${productId}/styles`, optionsStyles);
};

const addToCartPOST = function addToCart(productId) {
  return axios('/cart', {
    method: 'POST',
    data: { sku_id: productId },
  });
};

const addToCartDELETE = function addToCart() {
  return axios('/cart');
};

module.exports.addToCartDELETE = addToCartDELETE;
module.exports.addToCartPOST = addToCartPOST;
module.exports.getProduct = getProduct;
module.exports.getProductStyles = getProductStyles;
