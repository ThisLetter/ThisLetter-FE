import React from "react";

interface Props {
  type: string;
  id: string;
  placeholder: string;
  classNames: string;
}

const Input = ({ type, id, placeholder = "", classNames }: Props) => {
  return (
    <input
      className={"border rounded" + " " + classNames}
      id={id}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
