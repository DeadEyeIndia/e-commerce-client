import React from "react";
import { Link } from "react-router-dom";

import "../styles/headers.scss";
import Logo from "../assets/Logo.svg";
import Profile from "../assets/Profile.svg";

const Header = () => {
  return (
    <div className="app__header f-sb-c">
      <Link to="/" className="app__header-logo">
        <img src={Logo} className="app__logo" />
      </Link>
      <div className="app__header-authenticate">
        <span>Login</span>
      </div>
    </div>
  );
};

export default Header;
