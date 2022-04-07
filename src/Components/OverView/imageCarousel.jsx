import React from 'react';
import './styles/imageCarousel.scss';

function ImageCarousel(props) {
  const { mainImage } = props;
  return (
    <img src={mainImage} alt="main image" />
  );
}

export default ImageCarousel;
