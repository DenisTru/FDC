import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import ItemStyles from './itemStyles';
import './infoPanel.scss';

function InfoPanel({ product, handleClick, currentStyle }) {
  if ($.isEmptyObject(product)) {
    return 'No Item to display';
  }
  const { category, name, description } = product;
  if (!product.description
    || product.description === '') {
    return (
      <div>
        <div>{category}</div>
        <div>{name}</div>
        <ItemStyles handleClick={handleClick} currentSelectedStyle={currentStyle} />
      </div>
    );
  }
  return (
    <div>
      <div>{category}</div>
      <div>{name}</div>
      <div className="sale-price">
        {currentStyle.sale_price ? currentStyle.sale_price : ''}
        {' '}
        {currentStyle.sale_price ? <div className="original-price-strike">{currentStyle.original_price}</div> : <div className="original-price">{currentStyle.original_price}</div>}
        {' '}
      </div>
      <ItemStyles handleClick={handleClick} currentSelectedStyle={currentStyle} />
      <div>{description}</div>
    </div>
  );
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
        quantity: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
export default InfoPanel;
