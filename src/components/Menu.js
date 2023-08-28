import React, { useState } from "react";
import "./Menu.css";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";

const MENU_ITEMS = [
  "Sign In",
  "Legal",
  "Licenses",
  "Security",
  "Careers",
  "Press",
  "Support",
  "Status",
  "Codeblog",
];
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <div className="menu">
        <ul>
          {MENU_ITEMS.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          <Hamburger />
        </button>
        <ul className="menu-items">
          {MENU_ITEMS.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Menu;
