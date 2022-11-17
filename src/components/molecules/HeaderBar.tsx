import React, { Dispatch, SetStateAction } from "react";
import Button from "../atoms/Button";
import HeaderText from "../atoms/HeaderText";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const HeaderBar = ({ setMenuOpen, menuOpen }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const locationName = location.pathname.slice(1);

  const goBackHandler = () => {
    navigate(-1);
  };

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={"flex justify-between items-center p-2.5"}>
      <Button type={"button"} uiType={"arrow"} onClick={goBackHandler}>
        <AiOutlineArrowLeft />
      </Button>
      <HeaderText text={locationName} />
      <Button onClick={menuOpenHandler} type={"button"} uiType={"button"}>
        메뉴바 오픈
      </Button>
    </div>
  );
};

export default HeaderBar;
