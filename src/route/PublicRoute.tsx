import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/atom/userLogin";

interface Props {
  children: JSX.Element;
}

const PublicRoute = ({ children }: Props) => {
  const [isLogin] = useRecoilState(userAtom);
  return isLogin ? <Navigate to={"/login"} /> : children;
};

export default PublicRoute;
