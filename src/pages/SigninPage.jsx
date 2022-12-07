import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signIn } from "../features/auth/authActions";
import "../styles/signin.scss";
import Logo from "../assets/Logo.svg";

const SigninPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    if (user.email && user.password) {
      dispatch(signIn(user.email, user.password));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="app__signin f-c-c">
      <Link to="/" className="app__logo-image">
        <img src={Logo} />
      </Link>
      <div className="app__signin-container f-c-c">
        <form className="app__signin-form f-c-c" onSubmit={handleSignInSubmit}>
          <h1>LOGIN</h1>
          <div className="app__signin-innerform">
            <div className="app__sigin-input_container">
              <label>Email</label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="app__sigin-input_container">
              <label>Password</label>
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="app__sigin-input_container">
              <input type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
      <div className="app__signin-forgot_signup">
        <span>Forgot password?</span>
        <Link to="/signup">New user? Register here!</Link>
      </div>
    </div>
  );
};

export default SigninPage;
