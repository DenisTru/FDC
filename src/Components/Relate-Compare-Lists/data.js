const axios = require('axios');
//const config = require('../../../config');

<<<<<<< HEAD
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
=======
// const options = {
//   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products',
//   headers: {
//     Authorization: config.TOKEN,
//   },
//   method: 'get',
// };

// // function getData(res) {
// //   const data = res;
// //   return data;
// // }

// const getData = function getData() {
//   return axios(options);
// };

// module.exports = getData;
>>>>>>> f219aaea99cf1221c73e7b5e35d0788695cdba1e
