/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { categories, trendingOptions, accounts } from "../assets/data";
import Closelogo from "../assets/Closeicon.svg";
import Logo from "../assets/Logo.svg";
import Avatar from "../assets/Avatar.svg";
import HomeIcon from "../assets/HomeIcon.svg";

const Navbar = ({ handleNavToggle }) => {
  const { user } = useSelector((state) => state.auth);

  const userFirstName = user?.user?.name.split(" ");

  return (
    <>
      <div className="app__navbar">
        <div className="app__navbar-left">
          <div className="app__navbar-logo">
            <div>
              <img src={Logo} alt="main logo" />
              <img src={Avatar} alt="user logo" />
            </div>
            <div>
              <h3>
                {user ? (
                  <>Welcome, {userFirstName}</>
                ) : (
                  <>
                    <Link
                      to="/signin"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Log in?
                    </Link>
                  </>
                )}
              </h3>
            </div>
          </div>
          <div className="app__navbar-body">
            <Link to="/" onClick={handleNavToggle}>
              <span>The Mart</span>
              <span>
                <img src={HomeIcon} alt="home icon" />
              </span>
            </Link>
            <div className="app__navbar-categoryList">
              <h2>Categories</h2>
              {categories.map(({ id, name, value }) => (
                <>
                  <Link
                    to={`/${value}`}
                    className="app__navbar-category"
                    key={id}
                  >
                    <span>{name}</span>
                  </Link>
                </>
              ))}
            </div>
            <div className="app__navbar-trendingList">
              <h2>Trending</h2>
              {trendingOptions.map(({ id, name, value }) => (
                <>
                  <Link
                    to={`/${value}`}
                    className="app__navbar-trending"
                    key={id}
                  >
                    <span>{name}</span>
                  </Link>
                </>
              ))}
            </div>
            <div className="app__navbar-account">
              <h2>Profile</h2>
              {accounts.map(({ id, name, value }) => (
                <>
                  <Link to={`/${value}`} key={id}>
                    <span>{name}</span>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="app__navbar-right">
          <div onClick={handleNavToggle}>
            <img src={Closelogo} alt="close icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
