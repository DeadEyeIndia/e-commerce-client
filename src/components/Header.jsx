import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../features/auth/authAction";
import "../styles/headers.scss";
import Logo from "../assets/Logo.svg";
import Profile from "../assets/ProfileLOGO.svg";
import HandburgerMenu from "../assets/Hand.svg";
import Search from "../assets/search.svg";
import CartIcon from "../assets/carticon.png";

const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const userFirstName = user?.user?.name.split(" ");

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="app__header f-sb-c">
      <div className="app__header-top">
        <Link to="/" className="app__header-logo">
          <img src={Logo} className="app__logo" />
        </Link>

        {user?.user ? (
          <div className="app__header-authenticated" onClick={handleSignOut}>
            <span>{userFirstName[0]}</span>
            <div className="app__header-user">
              <img src={Profile} alt="" />
            </div>
          </div>
        ) : (
          <Link to="/signin" className="app__header-authenticate">
            <span className="app__signin">Login</span>
          </Link>
        )}
      </div>
      <div className="app__header-bottom">
        <img src={HandburgerMenu} alt="handburgermenu" />
        <div className="app__header-searchbox">
          <div className="searchIcon f-c-c">
            <img src={Search} alt="search icon" />
          </div>
          <form className="app__header-searchboxInner">
            <input type="text" />
            <input type="submit" hidden />
          </form>
        </div>
        <div className="app__cartIcon">
          <img src={CartIcon} alt="cart icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
