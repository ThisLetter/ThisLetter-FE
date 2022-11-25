import React from "react";
import { Route, Routes } from "react-router-dom";
import {} from "../pages";
import App from "../App";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<App />} />
    </Routes>
  );
};

export default Router;
