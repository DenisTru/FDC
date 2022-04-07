import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import ItemStyles from './itemStyles';
import './styles/infoPanel.scss';
import StarRating from './starRating';
import SizeSelector from './sizeSelector';

class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemStock: '',
      quantityToPurchase: 0,
    };
  }

  handleChangeSize = (e) => {
    this.setState({ itemStock: Number(e.target.value) });
  };

  handleChangeQuantity = (e) => {
    this.setState({ quantityToPurchase: e.target.value });
  };

  render() {
    const {
      product, handleClick, currentStyle, reviews = 2.5,
      productStyles,
    } = this.props;
    const { itemStock, quantityToPurchase } = this.state;
    if ($.isEmptyObject(product)) {
      return 'No Item to display';
    }
    const { category, name, description } = product;
    if (!description
    || description === '') {
      return (
        <div>
          <div className="category-title">{category}</div>
          <div className="name-title">{name}</div>
          <ItemStyles
            handleClick={handleClick}
            currentSelectedStyle={currentStyle}
            productStyles={productStyles}
          />
          <SizeSelector />
        </div>
      );
    }
    return (
      <div>
        <div>
          {reviews ? <StarRating reviews={reviews} /> : ''}
          {reviews ? <a className="read-reviews">Read all reviews</a> : ''}
        </div>
        <div className="category-title">{category}</div>
        <div className="name-title">{name}</div>
        <div className="sale-price">
          <div className="dollar">$</div>
          {currentStyle.sale_price ? currentStyle.sale_price : ''}
          {currentStyle.sale_price ? <div className="original-price-strike">{currentStyle.original_price}</div> : <div className="original-price">{currentStyle.original_price}</div>}
        </div>
        <ItemStyles
          handleClick={handleClick}
          currentSelectedStyle={currentStyle}
          productStyles={productStyles}
        />
        <SizeSelector
          currentSelectedStyle={currentStyle}
          itemStock={itemStock}
          quantityToPurchase={quantityToPurchase}
          handleChangeSize={this.handleChangeSize}
          handleChangeQuantity={this.handleChangeQuantity}
        />
        {/* <div className="product-description">{description}</div> */}
      </div>
    );
  }
}

InfoPanel.defaultProps = {
  product: {},
};

InfoPanel.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
  }),
  handleClick: PropTypes.func,
  currentStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape({ thumbnail_url: PropTypes.string })),
    skus: PropTypes.objectOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default InfoPanel;
