import { ComponentProps } from "react";
import "./Hamburger.scss";
export const Hamburger = (props: ComponentProps<"label">) => {
  return (
    <label
      {...props}
      className={`burger ${props.className}`}
      htmlFor="hamburger-input"
    >
      <input type="checkbox" id="hamburger-input" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};
