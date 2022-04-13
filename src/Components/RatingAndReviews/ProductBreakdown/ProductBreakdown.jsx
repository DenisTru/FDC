import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss';

export default function ProductBreakdown({ characteristics }) {
  const keys = Object.keys(characteristics).slice();
  const types = ['Size', 'Width', 'Quality', 'Length', 'Fit', 'Comfort'];
  const size = ['too small', 'Perfect', 'too wide'];
  const width = ['Too narrow', 'Perfect', 'Too wide'];
  const comfort = ['Poor', 'Ok', 'Perfect'];
  const quality = ['Poor', 'expected', 'Perfect'];
  const length = ['Short', 'Perfect', 'Long'];
  const fit = ['Tight', 'Perfect', 'Long'];
  const obj = {
    size, width, comfort, quality, length, fit,
  };

  return (
    <div
      className="productBreakDown"
      style={{
        width: '80%', paddingTop: '30px', borderRadius: '16px', paddingBottom: '30px',
      }}
    >
      {
        types.map((type) => (
          keys.includes(type) ? (
            <div key={type} style={{ marginBottom: '20px' }}>
              <div style={{
                textAlign: 'center',
                color: '#161912',
                fontSize: '90%',
              }}
              >
                How do you like the
                {' '}
                {`${type} `}
              </div>
              <div>
                <div style={{ marginLeft: '5%' }}>
                  <span className="styleBar">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <span className="middleBar" style={{ left: `${(characteristics[type].value / 5) * 80}%` }} />
                  </span>
                  <div style={{
                    width: '85%',
                    marginLeft: '8%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '80%',
                  }}
                  >
                    <div className="charFirst">
                      {
                        obj[type.toLowerCase()][0]
                      }
                    </div>
                    <div className="charSecond">
                      {
                        obj[type.toLowerCase()][1]
                      }
                    </div>
                    <div className="charThird" style={{ marginRight: '0' }}>
                      {
                        obj[type.toLowerCase()][2]
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        ))
      }
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
