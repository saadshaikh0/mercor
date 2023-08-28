import React from "react";

const FooterButton = ({ Icon, label }) => {
  return (
    <div className="footer-button">
      {Icon}
      {label}
    </div>
  );
};

export default FooterButton;
