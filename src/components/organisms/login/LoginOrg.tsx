import React from "react";
import LoginInput from "../../molecules/login/LoginInput";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const LoginOrg = () => {
  const navigate = useNavigate();
  const goRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <LoginInput />
      <Button
        classNames={"w-full"}
        type={"button"}
        uiType={"button"}
        onClick={goRegister}
      >
        회원가입하러 가기
      </Button>
    </>
  );
};

export default LoginOrg;
