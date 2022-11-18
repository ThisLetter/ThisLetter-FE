import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
  uiType: "arrow" | "button";
  classNames?: string;
  onClick: () => any;
  children: React.ReactNode | string;
}

const Button = ({
  type = "button",
  uiType = "button",
  children = "",
  onClick,
  classNames,
}: Props) => {
  const styles =
    uiType === "button"
      ? "border-solid border-2 border-black rounded-md bg-white px-4 py-2 flex justify-center align-center"
      : "px-4 py-2";
  return (
    <button onClick={onClick} className={styles + " " + classNames} type={type}>
      {children}
    </button>
  );
};

export default Button;
