import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert("없는 페이지거나 접근이 불가능한 페이지입니다.");
    navigate("/", { replace: true });
  }, []);
  return null;
};

export default NotFound;
