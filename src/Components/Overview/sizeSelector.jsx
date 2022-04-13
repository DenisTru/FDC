import React from 'react';
import PropTypes from 'prop-types';
import './styles/sizeSelector.scss';

function SizeSelector({
  currentSelectedStyle, itemStock, handleChangeSize, handleChangeQuantity, pickSize,
}) {
  const skuOptions = Object.entries(currentSelectedStyle.skus);
  const sumStock = skuOptions.reduce((prev, current) => prev + current[1].quantity, 0);

  if (sumStock <= 0) {
    return (
      <div className="selectSize-container">
        <div className="custom-select">
          <select disabled>
            <option key="default-5" value="" disabled selected>Out of Stock</option>
          </select>
        </div>
      </div>
    );
  }
  return (
    <div className="selectSize-container">
      <div className="custom-select">
        <select value={pickSize} onChange={handleChangeSize}>
          <option key="default-6" value="default" disabled>Select Size</option>
          {Object.entries(currentSelectedStyle.skus).filter((item) => item[1].quantity > 0)
            .map((item) => (
              <option
                key={item[0]}
                data-sku={item[0]}
                value={JSON.stringify(item[1].quantity)}
              >
                {item[1].size}
              </option>
            ))}
        </select>
      </div>
      <div className="custom-select">
        {itemStock ? (
          <select onChange={(e) => handleChangeQuantity(e)}>
            {Array.from(Array(Number(itemStock)), (e, i) => {
              if (i < 14) {
                if (i > 0) {
                  return <option key={i}>{i}</option>;
                }
              }
              return '';
            })}
          </select>
        ) : (
          <select disabled={!itemStock}>
            <option>-</option>
          </select>
        )}

      </div>
    </div>
  );
}

SizeSelector.propTypes = {
  currentSelectedStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape({ thumbnail_url: PropTypes.string })),
    skus: PropTypes.objectOf(
      PropTypes.shape({
        quantity: PropTypes.number,
        size: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  itemStock: PropTypes.string.isRequired,
  handleChangeSize: PropTypes.func.isRequired,
  handleChangeQuantity: PropTypes.func.isRequired,
  pickSize: PropTypes.string.isRequired,
};

export default SizeSelector;
