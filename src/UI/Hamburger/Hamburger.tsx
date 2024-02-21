import React from "react";

import "./Hamburger.scss";
export const Hamburger = ({ className, props }) => {
  return (
    <label className={`burger ${className}`} htmlFor="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};
