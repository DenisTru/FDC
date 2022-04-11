import React from 'react';
import PropTypes from 'prop-types';
import './styles/itemStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import fill from './assets/noImagefill.png';

function ItemStyles({ productStyles, currentSelectedStyle, handleClick }) {
  return (
    <div className="items-styles-body">
      <div className="style-title">
        <h3>Style</h3>
        <FontAwesomeIcon icon={faGreaterThan} />
        <div className="current-style">{currentSelectedStyle.name}</div>
      </div>
      <div className="styles-container">
        {productStyles.map((style) => {
          if (style.style_id === currentSelectedStyle.style_id) {
            return (
              <div key={style.style_id} className="thumb-image-container">
                <div
                  key={style.style_id}
                  className="label"
                  style={style.photos[0].thumbnail_url ? { backgroundImage: `url(${style.photos[0].thumbnail_url})` } : { backgroundImage: fill }}
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
              </div>
            );
          }
          return (
            <div
              key={style.style_id}
              role="checkbox"
              aria-checked="false"
              tabIndex={0}
              className="thumb-image-container"
              onClick={() => handleClick(style)}
              onKeyDown={() => handleClick(style)}
            >

              <img
                src={style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : fill}
                className="image--cover"
                alt={style.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

ItemStyles.defaultProps = {

};

ItemStyles.propTypes = {
  handleClick: PropTypes.func.isRequired,
  currentSelectedStyle: PropTypes.shape({
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
};

export default ItemStyles;
