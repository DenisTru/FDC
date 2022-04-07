import React from 'react';
import './styles/sizeSelector.scss';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemStock: '',
      quantityToPurchase: 0,
    };
  }

  handleChangeSize(e) {
    this.setState({ itemStock: Number(e.target.value) });
  }

  handleChangeQuantity(e) {
    this.setState({ quantityToPurchase: e.target.value});
  }

  render() {
    const { currentSelectedStyle } = this.props;
    const { itemStock } = this.state;
    const skuOptions = Object.entries(currentSelectedStyle.skus);
    const sumStock = skuOptions.reduce((prev, current) => prev + current[1].quantity, 0);

    if (sumStock <= 0) {
      return (
        <div className="selectSize-container">
          <div className="custom-select">
            <select disabled>
              <option value="" disabled selected>Out of Stock</option>
            </select>
          </div>
        </div>
      );
    }
    return (
      <div className="selectSize-container">
        <div className="custom-select">
          <select onChange={(e) => this.handleChangeSize(e)}>
            <option selected disabled>Select Size</option>
            {Object.entries(currentSelectedStyle.skus).map((itemStock) => {
              if (itemStock[1].quantity > 0) {
                return (
                  <option
                    value={JSON.stringify(itemStock[1].quantity)}
                  >
                    {itemStock[1].size}
                  </option>
                );
              }
            })}
          </select>
        </div>
        <div className="custom-select">
          <select onChange={(e) => this.handleChangeQuantity(e)} disabled={!itemStock}>
            <option selected disabled>-</option>
            <option selected={itemStock} value="1">1</option>
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
}

// Once a size has been selected, the dropdown should default to 1.
// when size is chosen, value 1 is selected, then row 2 > 15 is rendered

export default SizeSelector;
