import React from "react";

const BodyTemp = ({ children }: { children: any }) => {
  return (
    <div className={"flex flex-col flex-1 w-full items-center justify-center"}>
      {children}
    </div>
  );
};

export default BodyTemp;
