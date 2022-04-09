import React from 'react';
import $ from 'jquery';
import { BsCheck } from 'react-icons/bs';
import PropTypes from 'prop-types';
import ItemStyles from './itemStyles';
import './styles/overview.scss';
import StarRating from './starRating';
import SizeSelector from './sizeSelector';
import ImageCarousel from './imageCarousel';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemStock: '',
      quantityToPurchase: 0,
      itemSku: 0,
    };
  }

  handleChangeSize = (e) => {
    const sku = $(`option[value="${e.target.value}"]`).attr('sku');
    this.setState(
      { itemStock: e.target.value, itemSku: sku },
    );
  };

  handleChangeQuantity = (e) => {
    this.setState(
      { quantityToPurchase: e.target.value },
    );
  };

  handleCart = (e) => {
    e.preventDefault();
    const promises = [];
    const { quantityToPurchase, itemSku } = this.state;

    function addCart(item) {
      return fetch('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sku_id: item }),
      });
    }

    for (let i = 0; i < quantityToPurchase; i += 1) {
      promises.push(addCart(itemSku));
    }

    Promise.all(promises)
      .then(() => {

      })
      .catch(() => {

      });
  };

  render() {
    const {
      product, handleClick, currentStyle, reviewsStarAverage,
      productStyles, styleImages,
    } = this.props;
    const { itemStock, quantityToPurchase } = this.state;

    const formatedStyles = styleImages.map((style) => ({
      original: style.url,
      thumbnail: style.thumbnail_url,
    }));

    if ($.isEmptyObject(product)) {
      return 'No Item to display';
    }
    const {
      category, name, slogan, description,
    } = product;
    return (
      <div className="overview-container">
        <div className="info-panel">
          <div>
            {reviewsStarAverage ? <StarRating reviewsStarAverage={reviewsStarAverage} /> : ''}
            {reviewsStarAverage ? <a className="read-reviews">Read all reviews</a> : ''}
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
          <button type="submit" onClick={this.handleCart}>
            Add To Cart
          </button>
        </div>
        <ImageCarousel styleImages={formatedStyles} />
        <div className="product-info-container">
          <div className="body">
            <div className="product-slogan">{slogan || 's'}</div>
            <div className="product-description">{description || 's'}</div>
          </div>
        </div>
        <div className="gmo-free">
          <p>
            <BsCheck size={20} />
            GMO and Pesticide-free
          </p>
          <p>
            <BsCheck size={20} />
            Made with 100% Genetic Modification
          </p>
          <p>
            <BsCheck size={20} />
            Good Stuff
          </p>
        </div>
      </div>
    );
  }
}

Overview.defaultProps = {
  product: {},
  reviewsStarAverage: null,
};

Overview.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
  }),
  handleClick: PropTypes.func.isRequired,
  currentStyle: PropTypes.shape({
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
  productStyles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape({
      thumbnail_url: PropTypes.string,
      url: PropTypes.string,
    })),
    skus: PropTypes.objectOf(
      PropTypes.shape({
        quantity: PropTypes.number,
        size: PropTypes.string,
      }),
    ),
  })).isRequired,
  reviewsStarAverage: PropTypes.number,
  styleImages: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default Overview;
