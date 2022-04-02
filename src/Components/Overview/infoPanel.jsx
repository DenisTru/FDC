import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

function InfoPanel({ product }) {
  if ($.isEmptyObject(product)) {
    return 'No Item to display';
  }
  const { category, name } = product;
  return (
    <div>
      <div>{category}</div>
      <div>{name}</div>
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
};
export default InfoPanel;
