import React from 'react';
import './styles/itemStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

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
                  style={{ backgroundImage: `url(${style.photos[0].thumbnail_url})` }}
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
                src={style.photos[0].thumbnail_url}
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

export default ItemStyles;
