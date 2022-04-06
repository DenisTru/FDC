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
    this.setState({ itemStock: Number(e.target.value) }, () => console.log(this.state));
  }

  handleChangeQuantity(e) {
    this.setState({ quantityToPurchase: e.target.value }, () => console.log(this.state));
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
            {skuOptions.map((itemStock) => {
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
            {Array.from(Array(Number(itemStock)), (e, i) => <option key={i}>{i + 1}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

// function SizeSelector({ style = mockStyle, productSize, productStock }) {
//   const skuOptions = Object.entries(style.skus);
//   const sumStock = skuOptions.reduce((prev, current) => prev + current[1].quantity, 0);

//   if (sumStock <= 0) {
//     return (
//       <div className="selectSize-container">
//         <div className="custom-select">
//           <select disabled>
//             <option value="" disabled selected>Out of Stock</option>
//           </select>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="selectSize-container">
//       <div className="custom-select">
//         <select>
//           <option value="" disabled selected>Select Size</option>
//           {skuOptions.map((itemStock) => {
//             if (itemStock[1].quantity > 0) {
//               return <option value={itemStock[1]}>{itemStock[1].size}</option>;
//             }
//           })}
//         </select>
//       </div>
//       <div className="custom-select">
//         <select>
//           <option value="1" selected>1</option>
//         </select>
//       </div>
//     </div>
//   );
// }

export default SizeSelector;
