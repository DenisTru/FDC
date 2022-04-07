import React from 'react';
import PropTypes from 'prop-types';

export default function ProductBreakdown({ characteristics }) {
  const keys = Object.keys(characteristics).slice();
  return (
    <div>
      {
        keys.includes('Size') ? (
          <div>
            Size
            {' '}
            {characteristics.Size.value}
          </div>
        ) : <div />
      }
      {
        keys.includes('Width') ? (
          <div>
            Width
            {' '}
            {characteristics.Width.value}
          </div>
        ) : <div />
      }
      {
        keys.includes('Quality') ? (
          <div>
            Quality
            {' '}
            {characteristics.Quality.value}
          </div>
        ) : <div />
      }
      {
        keys.includes('Length') ? (
          <div>
            Length
            {' '}
            {characteristics.Length.value}
          </div>
        ) : <div />
      }
      {
        keys.includes('Fit') ? (
          <div>
            Fit
            {' '}
            {characteristics.Fit.value}
          </div>
        ) : <div />
      }
      <br />
      <br />
    </div>
  );
}

ProductBreakdown.propTypes = {
  characteristics: PropTypes.shape({
    Size: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Width: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Quality: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Length: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
    Fit: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  }),
};
ProductBreakdown.defaultProps = {
  characteristics: {},
};
