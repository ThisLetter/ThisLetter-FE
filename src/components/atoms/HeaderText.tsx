import React from "react";

interface Props {
  text: string;
}

const HeaderText = ({ text = "This Letter.." }: Props) => {
  return <div>{text}</div>;
};

export default HeaderText;
