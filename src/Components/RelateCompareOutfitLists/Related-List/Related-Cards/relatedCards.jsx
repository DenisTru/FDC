import React from 'react';
import '../../relateOutfitLists.scss';
import RelatedCardButton from './relatedCardButton';
import RelatedCardPrice from './relatedCardPrice';
import RelatedCardImage from './relatedCardImage';
import TextRating from '../../../RatingAndReviews/StaticStars';

export default function relatedCards({
  relatedProducts, relatedProductStyles,
  relatedProductRatingInfo, startComparing, changeProductID,
}) {
  if (relatedProductStyles && relatedProducts && relatedProductRatingInfo) {
    if (relatedProductStyles.length && relatedProducts.length && relatedProductRatingInfo.length) {
      // console.log('relatedProductRatingInfo ', relatedProductRatingInfo);

      return (
        <div id="related-slider">
          {relatedProducts.map((product, index) => (
            <div
              className="slider-cards"
              key={JSON.stringify(product.id)}
              onClick={() => { changeProductID(product.id); }}
              role="button"
              tabIndex={0}
              onKeyPress={() => { changeProductID(product.id); }}
            >
              <div id="image-container">
                <RelatedCardImage relatedProductStyles={relatedProductStyles[index]} />
              </div>
              <RelatedCardButton
                startComparing={startComparing}
                product={product}
              />
              <div id="productCategory">
                {product.category}
              </div>
              <div id="productName">
                {product.name}
              </div>
              <div id="productPrice">
                <RelatedCardPrice
                  productPrice={product.default_price}
                  productStyles={relatedProductStyles[index]}
                />
              </div>
              <div id="productStarRating">
                {/* {TextRating(relatedProductRatingInfo[index].rating)} */}
              </div>
              <div id="number-of-ratings">
                {/* {`${`(${relatedProductRatingInfo[index].numReviews})`}`} */}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <div id="related-slider">
      <div className="slider-cards">
        <div id="image-container">
          Image
        </div>
        <RelatedCardButton />
        <div id="productCategory">
          Product Category
        </div>
        <div id="productName">
          Product Name
        </div>
        <div id="productPrice">
          Product Price
        </div>
        <div id="productStarRating">
          Product Star Rating
        </div>
      </div>
    </div>
  );
}
