import React from "react";
import RegisterInputCheck from "../../molecules/register/RegisterInputCheck";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const RegisterInputOrg = () => {
  const navigate = useNavigate();
  const checkHandler = (type: string) => {
    console.log(type);
  };

  const goPage = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className={"w-full"}>
      <RegisterInputCheck
        placeholder={"E-mail"}
        id={"email"}
        onClick={() => {
          checkHandler("emailCheck");
        }}
      />
      <RegisterInputCheck
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
          classNames={"mb-4 p-2 h-10"}
        />
        <Input
          type={"password"}
          id={"confirmPw"}
          placeholder={"Confirm PW"}
          classNames={"h-10 p-2 mb-4"}
        />
        <Input
          type={"text"}
          id={"nick"}
          placeholder={"Nick Name"}
          classNames={"h-10 p-2 mb-4"}
        />
      </div>
      <div className={"flex justify-center"}>
        <Button
          onClick={() => {
            goPage("login");
          }}
          classNames={"flex-1"}
          type={"button"}
          uiType={"button"}
        >
          제출하기
        </Button>
      </div>
    </div>
  );
};

export default RegisterInputOrg;
