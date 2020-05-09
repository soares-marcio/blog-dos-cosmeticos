import React from 'react';
import Logo from 'components/Logo';
import Search from 'components/Search';
import Menu from 'components/Menu';
import AccountManager from 'components/AccountManager';

const Header = () => (
  <header className="primary">
    <div className="firstbar">
      <div className="container">
        <div className="row">
          <Logo />
          <div className="col-md-9 col-sm-12">&nbsp;</div>
        </div>
      </div>
    </div>
    <Menu />
  </header>
);

export default Header;