import React from 'react';
import Login from "./Login";
import Register from "./Register";

const AccountManager = () => (
  <div className="col-md-3 col-sm-12 text-right">
    <ul className="nav-icons">
      <Login />
      <Register />
    </ul>
  </div>
);

export default AccountManager;