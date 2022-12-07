import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signUp } from "../features/auth/authActions";
import "../styles/signup.scss";
import Logo from "../assets/Logo.svg";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (
      newUser.name &&
      newUser.email &&
      newUser.mobile &&
      newUser.password &&
      newUser.confirmPassword
    ) {
      dispatch(
        signUp(
          newUser.name,
          newUser.email,
          newUser.mobile,
          newUser.password,
          newUser.confirmPassword
        )
      );
    }
    // console.log(newUser);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="app__signup f-c-c">
      <Link to="/" className="app__logo-image">
        <img src={Logo} />
      </Link>
      <div className="app__signup-container f-c-c">
        <form className="app__signup-form f-c-c" onSubmit={handleSignUpSubmit}>
          <h1>REGISTER</h1>
          <div className="app__signup-innerform">
            <div className="app__signup-input_container">
              <label>Username</label>
              <input
                type="text"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
            </div>
            <div className="app__signup-input_container">
              <label>Email</label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </div>
            <div className="app__signup-input_container">
              <label>Mobile Number</label>
              <input
                type="number"
                value={newUser.mobile}
                onChange={(e) =>
                  setNewUser({ ...newUser, mobile: e.target.value })
                }
              />
            </div>
            <div className="app__signup-input_container">
              <label>Password</label>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </div>
            <div className="app__signup-input_container">
              <label>Confirm Password</label>
              <input
                type="password"
                value={newUser.confirmPassword}
                onChange={(e) =>
                  setNewUser({ ...newUser, confirmPassword: e.target.value })
                }
              />
            </div>
            <div className="app__signup-input_container">
              <input type="submit" value="Regsiter" />
            </div>
          </div>
        </form>
      </div>
      <div className="app__signup-alreadyuser">
        <Link to="/signin">Already Customer? Click here!</Link>
      </div>
    </div>
  );
};

export default SignupPage;
