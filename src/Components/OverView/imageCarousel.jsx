import React from 'react';
import './styles/imageCarousel.scss';
import ImageGallery from 'react-image-gallery';

function ImageCarousel(props) {
  const { styleImages } = props;
  return (
    <ImageGallery thumbnailPosition="left" items={styleImages} showPlayButton={false} />
  );
}

export default ImageCarousel;
