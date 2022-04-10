import React from 'react';
import './compareModal.scss';

export default function compareTable({
  currentProduct, currentProductStyles, currentProductRatingInfo,
  productToCompare, productToCompareStyles, productToCompareRating,
}) {
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
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}
