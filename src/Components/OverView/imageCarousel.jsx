import React from 'react';
import PropTypes from 'prop-types';
import './styles/imageCarousel.scss';
import { FiArrowDown, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      open: false,
    };
  }

  componentDidUpdate(prevProps) {
    // if current sytle changes we clear item stock to default value
    const { currentStyle } = this.props;
    if (prevProps.currentStyle !== currentStyle) {
      this.setState({
        currentSlide: 0,
      });
    }
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  setNext = () => {
    const { currentSlide } = this.state;
    const { styleImages } = this.props;
    const totalImages = styleImages.length;

    this.setState({
      currentSlide: currentSlide === totalImages - 1 ? 0 : currentSlide + 1,
    }, () => console.log(currentSlide));
  };

  setPrev = () => {
    const { currentSlide } = this.state;
    const { styleImages } = this.props;
    const totalImages = styleImages.length;

    this.setState({
      currentSlide: currentSlide === 0 ? totalImages - 1 : currentSlide - 1,
    }, () => console.log(currentSlide));
  };

  thumbnailSetSlide = (e) => {
    const { currentSlide } = this.state;
    const index = e.target.getAttribute('value');
    this.setState({
      currentSlide: Number(index),
    }, () => console.log(currentSlide));
  };

  render() {
    const { styleImages } = this.props;
    const { currentSlide, open } = this.state;

    return (
      <div className="image-gallery-container">
        <div className="thumb-nail-list">
          {styleImages.map((style, index) => (
            <div
              className="thumb-container"
              role="button"
              tabIndex={0}
              key={style.thumbnail}
              onClick={(e) => this.thumbnailSetSlide(e)}
              onKeyDown={(e) => this.thumbnailSetSlide(e)}
            >
              <img
                value={index}
                className={currentSlide === index ? 'thumb-active' : 'thumb'}
                src={style.thumbnail}
                alt="main"
              />
            </div>
          ))}
        </div>
        <div className="slides">

          {styleImages.length > 6 ? <FiArrowDown className="thumb-arrow" /> : ''}
          {currentSlide === 0 ? '' : <FiArrowLeftCircle className="left-arrow" onClick={this.setPrev} />}
          {
              currentSlide === styleImages.length - 1 ? '' : <FiArrowRightCircle className="right-arrow" onClick={this.setNext} />
            }
          {styleImages.map((style, index) => (
            <div
              role="button"
              tabIndex={0}
              key={style.original}
              className={index === currentSlide ? 'slide active' : 'slide'}
              onClick={this.handleOpen}
              onKeyDown={this.handleOpen}
            >
              {index === currentSlide && (<img className="image" src={style.original} alt="main" />)}
            </div>
          ))}
        </div>
        <div className="gallery-modal">
          <Modal
            open={open}
            onClose={this.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styles}>
              <div className="slides-modal">
                {styleImages.length > 6 ? <FiArrowDown className="thumb-arrow-modal" /> : ''}
                {currentSlide === 0 ? '' : <FiArrowLeftCircle className="left-arrow-modal" onClick={this.setPrev} />}
                {
              currentSlide === styleImages.length - 1 ? '' : <FiArrowRightCircle className="right-arrow-modal" onClick={this.setNext} />
            }
                {styleImages.map((style, index) => (
                  <div
                    key={style.original}
                    className={index === currentSlide ? 'slide-active-modal' : 'slide'}
                  >
                    {index === currentSlide && (<img className="slide-active-modal-image" src={style.original} alt="main" />)}
                  </div>
                ))}
                <div className="container-dots">
                  {Array.from({ length: styleImages.length - 1 }).map((item, index) => <div className={currentSlide === index + 1 ? 'dot active' : 'dot'}> </div>)}
                </div>
              </div>
            </Box>
          </Modal>
        </div>

      </div>
    );
  }
}

ImageCarousel.propTypes = {
  styleImages: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
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
};

export default ImageCarousel;
