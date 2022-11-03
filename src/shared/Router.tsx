import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Router;
