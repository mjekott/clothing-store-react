import React from "react";
import "./BaseButton.scss";

const BaseButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default BaseButton;
