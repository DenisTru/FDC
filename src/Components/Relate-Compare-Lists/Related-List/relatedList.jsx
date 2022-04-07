import React from 'react';
import PropTypes from 'prop-types';
import '../relateCompareLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import RelatedCards from './Related-Cards/relatedCards';
import { getRelatedProductIds, getRelatedProductInfo } from '../data';

const slideLeft = () => {
  const slider = document.getElementById('related-slider');
  slider.scrollLeft -= 235;
};

const slideRight = () => {
  const slider = document.getElementById('related-slider');
  slider.scrollLeft += 235;
};

class RelatedList extends React.Component {
  constructor(props) {
    super(props);

    const { productId } = this.props;
    this.state = {
      productIdNum: productId,
      relatedProducts: [],
    };
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  getRelatedProducts() {
    const { productIdNum } = this.state;
    getRelatedProductIds(productIdNum)
      .then(({ data }) => {
        const products = [];
        for (let i = 0; i < data.length; i += 1) {
          getRelatedProductInfo(data[i])
            .then((result) => {
              products.push(result.data);
            })
            .catch((err) => {
              console.log('error = ', err);
            });
        }

        console.log(products);

        this.setState((state) => ({ ...state, relatedProducts: products }), () => {
          const { relatedProducts } = this.state;
          console.log('relatedProducts length = ', relatedProducts.length, relatedProducts);
        });
      })
      .catch((err) => {
        console.log('error = ', err);
      });
  }

  render() {
    const { relatedProducts } = this.state;
    return (
      <div>
        <p>RELATED PRODUCTS</p>
        <div className="slider-container">
          <RelatedCards relatedProducts={relatedProducts} />
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
