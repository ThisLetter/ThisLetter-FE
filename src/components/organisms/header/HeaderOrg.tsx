import React, { useState } from "react";

import HeaderBar from "../../molecules/header/HeaderBar";
import HeaderMenu from "../../molecules/header/HeaderMenu";

const HeaderOrg = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={"relative"}>
      <HeaderBar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <HeaderMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default HeaderOrg;
