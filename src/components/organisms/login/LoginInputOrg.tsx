import React from "react";
import LoginInputCheck from "../../molecules/login/LoginInputCheck";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const LoginInputOrg = () => {
  const checkHandler = (type: string) => {
    console.log(type);
  };
  return (
    <div className={"mt-12"}>
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
      <div className={"flex flex-col"}>
        <Input
          type={"password"}
          id={"pw"}
          placeholder={"PW"}
          classNames={"mb-4 h-10"}
        />
        <Input
          type={"password"}
          id={"confirmPw"}
          placeholder={"Confirm PW"}
          classNames={"h-10 mb-4"}
        />
      </div>
      <div className={"flex justify-center"}>
        <Button
          onClick={() => {
            return;
          }}
          type={"button"}
          uiType={"button"}
        >
          제출하기
        </Button>
      </div>
    </div>
  );
};

export default LoginInputOrg;
