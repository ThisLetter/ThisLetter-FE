import React from "react";

interface Props {
  type: string;
  id: string;
  placeholder: string;
}

const Input = ({ type, id, placeholder = "" }: Props) => {
  return <input id={id} type={type} placeholder={placeholder} />;
};

export default Input;
