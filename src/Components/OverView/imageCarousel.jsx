import React from 'react';
import './styles/imageCarousel.scss';

const mockImage = 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';

function ImageCarousel() {
  return (
    <div className="carousel-container">
    <img className="main-image" src={mockImage}></img>
    </div>
  );
}

export default ImageCarousel;
