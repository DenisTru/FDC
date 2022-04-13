import React from 'react';
import './styles/socialShare.scss';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from 'react-share';

function SocialShare(image, url = String(window.location), size = '2.5rem', quote = 'Look at this cool item!') {
  return (
    <div className="social-share-container">
      <FacebookShareButton url={String(window.location)} quote={quote}>
        <FacebookIcon url={url} size={size} />
      </FacebookShareButton>
      <TwitterShareButton url={String(window.location)} title={quote}>
        <TwitterIcon size={size} />
      </TwitterShareButton>
      <PinterestShareButton
        url={String(window.location)}
        title={quote}
        media={image}
        windowWidth={1000}
        windowHeight={750}
      >
        <PinterestIcon size={size} />
      </PinterestShareButton>
    </div>
  );
}

export default SocialShare;
