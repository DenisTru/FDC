import React from 'react';
import PropTypes from 'prop-types';
import '../relateCompareLists.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import RelatedCards from './Related-Cards/relatedCards';
import getData from '../data';

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
      comparedProducts: [],
    };
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  getRelatedProducts() {
    const { productIdNum } = this.state;
    getData(productIdNum)
      .then(({ data }) => {
        this.setState((state) => ({ ...state, relatedProducts: data }), () => {
          const { relatedProducts } = this.state;
          console.log('relatedProducts = ', relatedProducts);
        });
      })
      .catch((err) => {
        console.log('error = ', err);
      });
  }

  render() {
    return (
      <div>
        <p>RELATED PRODUCTS</p>
        <div className="slider-container">
          <RelatedCards />
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
