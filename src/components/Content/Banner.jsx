import React from 'react';

const BannerAds = ({ href, content }) => (
  <div className="banner">
    <a {...href}>
      {content}
    </a>
  </div>
);

const BannerImg = ({ href, src, alt }) => (
  <div className="banner">
    <a {...href}>
      <img src={src} alt={alt} />
    </a>
  </div>
);

export { BannerAds, BannerImg };