import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import SiginPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import { loadUser } from "./features/auth/authActions";
import { store } from "./store";
import SellerRegisterationPage from "./pages/SellerRegisterationPage";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signin" element={<SiginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/seller/registration"
          element={<SellerRegisterationPage />}
        />
      </Routes>
    </>
  );
};

export default App;
