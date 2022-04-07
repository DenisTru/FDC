import React from 'react';
import '../../relateCompareLists.scss';
import RelatedCardButton from './relatedCardButton';
import RelatedCardPrice from './relatedCardPrice';
import RelatedCardImage from './relatedCardImage';

export default function relatedCards({ relatedProducts, relatedProductStyles }) {
  // console.log('relatedProducts ', relatedProducts);
  // console.log('relatedProductStyles ', relatedProductStyles);
  return (
    <div id="related-slider">
      {relatedProducts.map((product, index) => (
        <div className="slider-cards" key={JSON.stringify(product)}>
          <RelatedCardImage styles={relatedProductStyles[index]} />
          <RelatedCardButton />
          <div id="productCategory">
            {product.category}
          </div>
          <div id="productName">
            {product.name}
          </div>
          <RelatedCardPrice styles={relatedProductStyles[index]} />
          <div id="productStarRating">
            Product Star Rating
          </div>
        </div>
      ))}
    </div>
  );
}
