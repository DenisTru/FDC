import React from 'react';
import PropTypes from 'prop-types';
import './styles/imageCarousel.scss';
import ImageGallery from 'react-image-gallery';

function ImageCarousel(props) {
  const { styleImages } = props;
  return (
    <ImageGallery thumbnailPosition="left" items={styleImages} showPlayButton={false} />
  );
}

ImageCarousel.propTypes = {
  styleImages: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default ImageCarousel;
