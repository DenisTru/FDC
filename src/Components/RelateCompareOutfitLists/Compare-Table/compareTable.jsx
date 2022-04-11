import React from 'react';
import './compareModal.scss';
import GetStars from '../Related-List/Related-Cards/getStars';

export default function compareTable({
  currentProduct, currentProductStyles, currentProductRatingInfo,
  productToCompare, productToCompareStyles, productToCompareRating,
}) {
  // Handle review edge cases
  let currentProductRating = (
    <td>
      <GetStars ratingValue={0} />
      <td id="rating-num">(0)</td>
    </td>
  );

  let compareProductRating = (
    <td>
      <GetStars ratingValue={0} />
      <td id="rating-num">(0)</td>
    </td>
  );

  if (currentProductRatingInfo[0].numReviews > 0) {
    currentProductRating = (
      <td>
        <GetStars ratingValue={currentProductRatingInfo[0].rating} />
        <td id="rating-num">{`(${currentProductRatingInfo[0].numReviews})`}</td>
      </td>
    );
  }

  if (productToCompareRating.numReviews > 0) {
    compareProductRating = (
      <td>
        <GetStars ratingValue={currentProductRatingInfo[0].rating} />
        <td id="rating-num">{`(${productToCompareRating.numReviews})`}</td>
      </td>
    );
  }

  // Handle style price edge cases
  const getPrice = function getPrice(productPrice, productStyles) {
    if (productStyles) {
      if (productStyles.length) {
        let styleOriginalPrice = 0;
        if (productStyles[0].original_price) {
          styleOriginalPrice = productStyles[0].original_price;
        }
        if (productStyles[0].sale_price) {
          const salePrice = productStyles[0].sale_price;
          return (
            <div>
              <div id="salePrice">{`$${salePrice}`}</div>
              <div id="oldPrice">{`$${styleOriginalPrice}`}</div>
            </div>
          );
        }
      }
    }
    return (
      <div>{`$${productPrice}`}</div>
    );
  };

  const currentProductPrice = getPrice(currentProduct.default_price, currentProductStyles);
  const comparedProductPrice = getPrice(productToCompare.default_price, productToCompareStyles);

  const comparisonInfo = [
    { currentProduct: '-', category: '-', comparedProduct: '-' },
    { currentProduct: currentProductRating, category: 'Rating', comparedProduct: compareProductRating },
    { currentProduct: currentProduct.category, category: 'Category', comparedProduct: productToCompare.category },
    { currentProduct: currentProductPrice, category: 'Price', comparedProduct: comparedProductPrice },
    { currentProduct: currentProduct.description, category: 'Description', comparedProduct: productToCompare.description },
  ];

  return (
    <div>
      <table cellSpacing="0" style={{ width: '100%', height: '500px', padding: '5px 10px' }}>
        <thead>
          <tr>
            <th>{currentProduct.name}</th>
            <th> </th>
            <th>{productToCompare.name}</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {comparisonInfo.map((info, index) => (
            <tr key={JSON.stringify(info + index)}>
              <td>{info.currentProduct}</td>
              <td>{info.category}</td>
              <td>{info.comparedProduct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
