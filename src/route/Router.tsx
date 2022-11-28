import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home} from "../pages";
import App from "../App";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
};

export default Router;
