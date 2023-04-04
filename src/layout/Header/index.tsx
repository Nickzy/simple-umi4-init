import React, { ReactNode } from "react";
import MenuNav from "../Menu";

interface Hprops {
  rightContent?: string | number | ReactNode
}

function Header (props: Hprops) {
  return <div>
    <div className="logo"></div>
    <div>
      <MenuNav />
    </div>
    <div>{ props?.rightContent }</div>
  </div>
}

export default Header;
