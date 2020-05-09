import React from 'react';

const Logo = () => (
  <div className="col-md-3 col-sm-12">
    <div className="brand">
      <a href="/">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Blog dos Cosméticos Logo"
        />
      </a>
    </div>
  </div>
);

export default Logo;