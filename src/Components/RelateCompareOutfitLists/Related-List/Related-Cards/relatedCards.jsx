import React from 'react';
import '../../relateOutfitLists.scss';
import RelatedCardButton from './relatedCardButton';
import RelatedCardPrice from './relatedCardPrice';
import RelatedCardImage from './relatedCardImage';
import TextRating from '../../../RatingAndReviews/StaticStars';

export default function relatedCards({
  stylePhotos, relatedProducts, relatedProductStyles,
  relatedProductRatings, startComparing,
}) {
  if (stylePhotos && relatedProductStyles.length && relatedProductRatings.length) {
    return (
      <div id="related-slider">
        {relatedProducts.map((product, index) => (
          <div className="slider-cards" key={JSON.stringify(product)}>
            <div id="image-container">
              <RelatedCardImage imageURL={relatedProductStyles[index][0].photos} />
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
                styleSalePrice={relatedProductStyles[index][0].sale_price}
                styleOriginalPrice={relatedProductStyles[index][0].original_price}
              />
            </div>
            <div id="productStarRating">
              {TextRating(relatedProductRatings[index])}
            </div>
          </div>
        ))}
      </div>
    );
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
