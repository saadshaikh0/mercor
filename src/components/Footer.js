import React from "react";
import FooterButton from "./FooterButton";
import { ReactComponent as Apple } from "../assets/apple.svg";
import { ReactComponent as Google } from "../assets/google.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Twitch } from "../assets/twitch.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";

import "./Footer.css";

const MEDIA_ICONS = [<Twitch />, <Twitter />, <Instagram />];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-buttons-wrapper">
        <FooterButton Icon={<Apple />} label={"APP STORE"} />
        <FooterButton Icon={<Google />} label={"GOOGLE PLAY"} />
      </div>
      <Arrow className="arrow" />
      <p className="footer-text">
        Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
        our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
        trading offered by Cash App. Cash App Investing does not trade bitcoin
        and Cash App is not a member of FINRA or SIPC. Cash App facilitates
        banking services through Sutton Bank and Lincoln Savings Bank, Members
        FDIC.
      </p>
      <div className="footer-links">
        {MEDIA_ICONS.map((link) => {
          return <div>{link}</div>;
        })}
      </div>
    </div>
  );
};
export default Footer;
