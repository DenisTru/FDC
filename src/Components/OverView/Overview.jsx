import React from 'react';
import $ from 'jquery';
import { BsCheck } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { addToCartPOST } from './data';
import ItemStyles from './itemStyles';
import './styles/overview.scss';
import StarRating from './starRating';
import SizeSelector from './sizeSelector';
import ImageCarousel from './imageCarousel';
import fill from './assets/noImagefill.png';
import SocialShare from './socialShare';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemStock: '',
      quantityToPurchase: 1,
      itemSku: 0,
      pickSize: 'default',
    };
  }

  componentDidUpdate(prevProps) {
    // if current sytle changes we clear item stock to default value
    const { currentStyle } = this.props;
    if (prevProps.currentStyle !== currentStyle) {
      this.setState({
        itemStock: '',
        quantityToPurchase: 1,
        itemSku: 0,
        pickSize: 'default',
      });
    }
  }

  handleChangeSize = () => {
    const selectBox = document.getElementById('selectBox');
    const selectedValue = JSON.parse(selectBox.options[selectBox.selectedIndex].value);
    console.log('LINE 41 in Overview selectedValue ', selectedValue);
    this.setState(
      {
        itemStock: selectedValue.value,
        itemSku: selectedValue.dataSku,
        pickSize: selectedValue.value,
      },
    );
  };

  handleChangeQuantity = (e) => {
    this.setState(
      { quantityToPurchase: e.target.value },
    );
  };

  handleCart = (e) => {
    e.preventDefault();
    const addQuantityToCart = [];
    const { quantityToPurchase, itemSku } = this.state;
    if (itemSku !== 0) {
      for (let i = 0; i < quantityToPurchase; i += 1) {
        addQuantityToCart.push(addToCartPOST(itemSku));
      }

      Promise.all(addQuantityToCart);
    }
  };

  render() {
    const {
      product, handleClick, currentStyle, reviewsStarAverage,
      productStyles, styleImages, currentShownImage,
    } = this.props;
    const {
      itemStock, quantityToPurchase, itemSku, pickSize,
    } = this.state;

    const formatedStyles = styleImages.map((style) => {
      if (!style.url || !style.thumbnail_url) {
        return {
          original: fill,
          thumbnail: fill,
        };
      }
      return {
        original: style.url,
        thumbnail: style.thumbnail_url,
      };
    });

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
            {reviewsStarAverage ? (
              <div
                role="button"
                tabIndex="0"
                className="read-reviews"
                onClick={(e) => { e.preventDefault(); window.location.replace('/#ratings'); }}
                onKeyDown={(e) => { e.preventDefault(); window.location.replace('/#ratings'); }}
              >
                Read all reviews
              </div>
            ) : ''}
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
            itemSku={itemSku}
          />
          <SizeSelector
            currentSelectedStyle={currentStyle}
            itemStock={itemStock}
            quantityToPurchase={quantityToPurchase}
            handleChangeSize={this.handleChangeSize}
            handleChangeQuantity={this.handleChangeQuantity}
            pickSize={pickSize}
          />
          <button
            type="button"
            className="cart"
            onClick={this.handleCart}
          >
            <span>Add To Cart</span>
          </button>
        </div>
        <ImageCarousel currentStyle={currentStyle} styleImages={formatedStyles} />
        <div className="product-info-container">
          <div className="body">
            <div className="product-slogan">{slogan || 's'}</div>
            <div className="product-description">{description || 's'}</div>
            <SocialShare image={currentShownImage} />
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
  currentShownImage: PropTypes.string.isRequired,
};

export default Overview;
