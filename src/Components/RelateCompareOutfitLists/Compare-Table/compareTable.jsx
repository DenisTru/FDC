import React from 'react';
import './compareModal.scss';
import GetStars from '../Related-List/Related-Cards/getStars';

export default function compareTable({
  currentProduct, currentProductStyles, currentProductRatingInfo,
  productToCompare, productToCompareStyles, productToCompareRating,
}) {
  const currentProductRating = <GetStars ratingValue={currentProductRatingInfo[0].rating} />;
  const compareProductRating = <GetStars ratingValue={productToCompareRating.rating} />;

  const comparisonInfo = [
    { currentProduct: '-', category: '-', comparedProduct: '-' },
    { currentProduct: currentProductRating, category: 'Rating', comparedProduct: compareProductRating },
    { currentProduct: currentProduct.category, category: 'Category', comparedProduct: productToCompare.category },
    { currentProduct: currentProduct.default_price, category: 'Price', comparedProduct: productToCompare.default_price },
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
