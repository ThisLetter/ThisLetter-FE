import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  MyRoom,
  NotFound,
  Login,
  Register,
  RoomSelect,
  RoomCreate,
  RoomEdit,
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MyRoom />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/room" element={<MyRoom />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/room/select" element={<RoomSelect />} />
      <Route path="/room/create" element={<RoomCreate />} />
      <Route path="/room/edit" element={<RoomEdit />} />
    </Routes>
  );
};

export default Router;
