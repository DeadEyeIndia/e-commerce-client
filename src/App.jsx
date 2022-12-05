import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import SiginPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import { loadUser } from "./features/auth/authAction";
import { store } from "./store";

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
      </Routes>
    </>
  );
};

export default App;
