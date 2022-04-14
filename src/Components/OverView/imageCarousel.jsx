import React from 'react';
import PropTypes from 'prop-types';
import './styles/imageCarousel.scss';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  setNext = (e) => {
    const { currentSlide } = this.state;
    const { styleImages } = this.props;
    const totalImages = styleImages.length;

    this.setState({
      currentSlide: currentSlide === totalImages - 1 ? 0 : currentSlide + 1,
    }, () => console.log(currentSlide));
  };

  setPrev = (e) => {
    const { currentSlide } = this.state;
    const { styleImages } = this.props;
    const totalImages = styleImages.length;

    this.setState({
      currentSlide: currentSlide === 0 ? totalImages - 1 : currentSlide - 1,
    }, () => console.log(currentSlide));
  };

  render() {
    const { styleImages } = this.props;
    const { currentSlide } = this.state;

    return (
      <div className="slides">
        <FiArrowLeftCircle className="left-arrow" onClick={this.setPrev} />
        <FiArrowRightCircle className="right-arrow" onClick={this.setNext} />
        {styleImages.map((style, index) => (
          <div key={style.original} className={index === currentSlide ? 'slide active' : 'slide'}>
            {index === currentSlide && (<img className="image" src={style.original} alt="main" />)}
          </div>
        ))}
      </div>
    );
  }
}

ImageCarousel.propTypes = {
  styleImages: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default ImageCarousel;
