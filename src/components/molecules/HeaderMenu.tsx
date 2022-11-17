import React, { Dispatch, SetStateAction } from "react";
import { menu } from "../../utills/menu";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

interface menuProps {
  title: string;
  link: string;
}

const HeaderMenu = ({ menuOpen, setMenuOpen }: Props) => {
  const navigate = useNavigate();

  const pageMoveHandler = (link: string) => {
    setMenuOpen(!menuOpen);
    navigate(link);
  };

  const visible = menuOpen ? "block" : "hidden";

  return (
    <div className={"absolute top-64px right-0"}>
      {menu.map((list: menuProps) => {
        return (
          <Button
            onClick={() => {
              pageMoveHandler(list.link);
            }}
            key={list.title}
            classNames={"w-32" + " " + visible}
            type={"button"}
            uiType={"button"}
          >
            {list.title}
          </Button>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
