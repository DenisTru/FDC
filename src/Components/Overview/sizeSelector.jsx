import React from 'react';
import './styles/sizeSelector.scss';

function SizeSelector({
  currentSelectedStyle, itemStock, quantityToPurchase, handleChangeSize, handleChangeQuantity,
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
        <select
          defaultValue="DEFAULT"
          onChange={(e) => handleChangeSize(e)}
        >
          <option key="default-6" value="DEFAULT" disabled>Select Size</option>
          {Object.entries(currentSelectedStyle.skus).map((item) => {
            if (item[1].quantity > 0) {
              return (
                <option
                  key={item[0]}
                  data-sku={item[0]}
                  value={JSON.stringify(item[1].quantity)}
                >
                  {item[1].size}
                </option>
              );
            }
          })}
        </select>
      </div>
      <div className="custom-select">
        <select defaultValue={itemStock ? 'ONE' : 'DEFAULT'} onChange={(e) => handleChangeQuantity(e)} disabled={!itemStock}>
          <option value="DEFAULT" disabled>-</option>
          <option selected={itemStock} value="ONE">1</option>
          {Array.from(Array(Number(itemStock)), (e, i) => {
            if (i < 14) {
              return <option key={i + 2}>{i + 2}</option>;
            }
          })}
        </select>
      </div>
    </div>
  );
}

export default SizeSelector;
