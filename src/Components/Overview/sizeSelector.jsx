import React from 'react';
import './styles/sizeSelector.scss';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: 0,
    };
  }

  handleChangeSize(e) {
    this.setState({ item: e.target.value }, () => console.log(this.state));
  }

  handleChangeQuantity(e) {

  }

  render() {
    const { currentSelectedStyle } = this.props;
    const { item } = this.state;
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
            {skuOptions.map((item) => {
              if (item[1].quantity > 0) {
                return <option value={item[0]}>{item[1].size}</option>;
              }
            })}
          </select>
        </div>
        <div className="custom-select">
          <select onChange={(e) => this.handleChangeQuantity(e)} disabled={!item}>
            <option selected disabled>-</option>
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
//           {skuOptions.map((item) => {
//             if (item[1].quantity > 0) {
//               return <option value={item[1]}>{item[1].size}</option>;
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
