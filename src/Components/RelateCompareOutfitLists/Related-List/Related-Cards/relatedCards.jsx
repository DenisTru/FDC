import React from 'react';
import '../../relateOutfitLists.scss';
import RelatedCardButton from './relatedCardButton';
import RelatedCardPrice from './relatedCardPrice';
import RelatedCardImage from './relatedCardImage';
import RelatedCardReview from './relatedCardReview';

const removesDuplicates = function removesDuplicates(relatedProducts, currentProductId) {
  const filteredProducts = [];
  const uniqueIDs = {};
  for (let i = 0; i < relatedProducts.length; i += 1) {
    const currentRelatedProduct = relatedProducts[i];
    if (currentRelatedProduct.id !== currentProductId && !uniqueIDs[currentRelatedProduct.id]) {
      filteredProducts.push(currentRelatedProduct);
      uniqueIDs[currentRelatedProduct.id] = currentRelatedProduct.id;
    }
  }
  return filteredProducts;
};

export default function relatedCards({
  relatedProducts, relatedProductStyles, productId, productBundle,
  relatedProductRatingInfo, startComparing, changeProductID,
}) {
  console.log('productBundle ', productBundle);
  if (relatedProductStyles && relatedProducts && relatedProductRatingInfo) {
    if (relatedProductStyles.length && relatedProducts.length && relatedProductRatingInfo.length) {
      const filteredRelatedProducts = removesDuplicates(relatedProducts, productId);
      return (
        <div id="related-slider">
          {productBundle.relatedProductsInfo.map((product) => (
            <div
              className="slider-cards"
              key={JSON.stringify(product.product.id)}
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
  }

  return (
    <div> </div>
  );
}
