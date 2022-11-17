import React from "react";

interface Props {
  id: string;
  children: string;
  classNames: any;
}

const Label = ({ id, children = "", classNames }: Props) => {
  return (
    <label className={classNames} htmlFor={id}>
      {children}
    </label>
  );
};

export default Label;
