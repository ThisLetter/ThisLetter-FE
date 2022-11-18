import React from "react";
import Input from "../../atoms/Input";

const LoginInput = () => {
  return (
    <div className={"flex flex-col w-full"}>
      <Input
        type={"text"}
        id={"id"}
        placeholder={"ID"}
        classNames={"mb-4 p-2"}
      />
      <Input
        type={"password"}
        id={"id"}
        placeholder={"PW"}
        classNames={"mb-4 p-2"}
      />
    </div>
  );
};

export default LoginInput;
