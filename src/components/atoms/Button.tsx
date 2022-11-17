import React from "react";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  uiType: "arrow" | "button";
  classNames?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

const Button = ({
  type = "button",
  uiType = "button",
  children = "",
  classNames,
  onClick,
}: Props) => {
  const styles =
    uiType === "button"
      ? "border-solid border-2 border-black rounded-md bg-white px-4 py-2 flex justify-center align-center"
      : "px-4 py-2";
  return (
    <button className={styles + " " + classNames} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
