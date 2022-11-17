import React from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

interface Props {
  placeholder: string;
  id: string;
  onClick: () => void;
}

const LoginInputCheck = ({ placeholder, id, onClick }: Props) => {
  return (
    <div className={"flex mb-4 mt-10"}>
      <Input
        classNames={"flex-1 p-2 mr-4"}
        type={"text"}
        id={id}
        placeholder={placeholder}
      />
      <Button type={"button"} uiType={"button"} onClick={onClick}>
        확인하기
      </Button>
    </div>
  );
};

export default LoginInputCheck;
