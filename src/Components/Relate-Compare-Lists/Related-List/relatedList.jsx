import React from 'react';
import PropTypes from 'prop-types';
import '../relateCompareLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import RelatedCards from './Related-Cards/relatedCards';
import { getRelatedProductIds, getRelatedProductInfo, getRelatedProductStyles } from '../data';

const slideLeft = () => {
  const slider = document.getElementById('related-slider');
  slider.scrollLeft -= 240;
};

const slideRight = () => {
  const slider = document.getElementById('related-slider');
  slider.scrollLeft += 240;
};

class RelatedList extends React.Component {
  constructor(props) {
    super(props);

    const { productId } = this.props;
    this.state = {
      productIdNum: productId,
      relatedProducts: [],
      relatedProductStyles: [],
    };
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  getRelatedProducts() {
    const { productIdNum } = this.state;
    getRelatedProductIds(productIdNum)
      .then(({ data }) => {
        const productInfoPromises = [];
        const productStylesPromises = [];
        for (let i = 0; i < data.length; i += 1) {
          productInfoPromises.push(getRelatedProductInfo(data[i]));
          productStylesPromises.push(getRelatedProductStyles(data[i]));
        }
        // Get info of all related products and put it in the state as 'relatedProducts'
        const productsInfo = [];
        Promise.all(productInfoPromises)
          .then((result) => {
            for (let i = 0; i < result.length; i += 1) {
              productsInfo.push(result[i].data);
            }
            this.setState((state) => ({ ...state, relatedProducts: productsInfo }));
          })
          .catch((err) => {
            console.log('error = ', err);
          });
        // Get styles of related products and put it in the state as 'relatedProductStyles'
        const productsStyles = [];
        Promise.all(productStylesPromises)
          .then((result) => {
            for (let i = 0; i < result.length; i += 1) {
              productsStyles.push(result[i].data);
            }
            this.setState((state) => ({ ...state, relatedProductStyles: productsStyles }));
          })
          .catch((err) => {
            console.log('error = ', err);
          });
      })
      .catch((err) => {
        console.log('error = ', err);
      });
  }

  render() {
    const { relatedProducts, relatedProductStyles } = this.state;
    return (
      <div>
        <p>RELATED PRODUCTS</p>
        <div className="slider-container">
          <RelatedCards
            relatedProducts={relatedProducts}
            relatedProductStyles={relatedProductStyles}
          />
          <MdKeyboardArrowLeft size={40} className="arrow-button-left" onClick={slideLeft} />
          <MdKeyboardArrowRight size={40} className="arrow-button-right" onClick={slideRight} />
        </div>
      </div>
    );
  }
}

RelatedList.propTypes = {
  productId: PropTypes.number,
};

RelatedList.defaultProps = {
  productId: 0,
};

export default RelatedList;
