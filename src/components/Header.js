import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Eye } from "../assets/eye.svg";

import "./Header.css";
import Menu from "./Menu";
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <Eye className="eye" />
    </div>
  );
};
export default Header;
