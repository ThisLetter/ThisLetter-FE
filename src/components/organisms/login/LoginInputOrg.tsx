import React from "react";
import LoginInputCheck from "../../molecules/login/LoginInputCheck";

const LoginInputOrg = () => {
  const checkHandler = (type: string) => {
    console.log(type);
  };
  return (
    <div>
      <LoginInputCheck
        placeholder={"E-mail"}
        id={"email"}
        onClick={() => {
          checkHandler("emailCheck");
        }}
      />
      <LoginInputCheck
        placeholder={"Phone Number"}
        id={"phone"}
        onClick={() => {
          checkHandler("phoneCheck");
        }}
      />
    </div>
  );
};

export default LoginInputOrg;
