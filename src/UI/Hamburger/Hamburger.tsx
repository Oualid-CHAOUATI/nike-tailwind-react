import "./Hamburger.scss";
export const Hamburger = ({ className }: { className: string }) => {
  return (
    <label className={`burger ${className}`} htmlFor="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};
