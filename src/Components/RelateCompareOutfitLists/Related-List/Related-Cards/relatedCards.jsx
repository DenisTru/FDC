import React from 'react';
import '../../relateOutfitLists.scss';
import RelatedCardButton from './relatedCardButton';
import RelatedCardPrice from './relatedCardPrice';
import RelatedCardImage from './relatedCardImage';
import RelatedCardReview from './relatedCardReview';

export default function relatedCards({
  productBundle, startComparing, changeProductID,
}) {
  return (
    <div id="related-slider">
      {productBundle.relatedProductsInfo.map((product, index) => (
        <div
          className="slider-cards"
          key={JSON.stringify(product + index)}
        >
          <div id="image-container">
            <RelatedCardImage
              relatedProductStyles={product.styles}
              changeProductID={changeProductID}
              product={product.product}
            />
          </div>
          <RelatedCardButton
            startComparing={startComparing}
            product={product.product}
            relatedProductRatingInfo={product.reviews}
            relatedProductStyles={product.styles}
          />
          <div
            onClick={() => { changeProductID(product.id); }}
            role="button"
            tabIndex={0}
            onKeyPress={() => { changeProductID(product.id); }}
          >
            <div id="productCategory">
              {product.product.category}
            </div>
            <div id="productName">
              {product.product.name}
            </div>
            <div id="productPrice">
              <RelatedCardPrice
                productPrice={product.product.default_price}
                productStyles={product.styles}
              />
            </div>
            <RelatedCardReview
              relatedProductRatingInfo={product.reviews}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
