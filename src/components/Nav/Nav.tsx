import { headerLogo } from "../../assets/images";
import { Hamburger } from "../../UI/Hamburger/Hamburger";

export const Nav = () => {
  const anchors = "Home*About Us*Products*Contact Us";
  return (
    <header className="max-container py-[1em] fixed container left-0 right-0 z-[3] bg-white  bg-opacity-25 backdrop-blur-md">
      <nav className="flex items-center justify-between">
        <a href="#">
          <img src={headerLogo} alt="header-logo" />
        </a>
        <ul className="flex gap-[2em] max-md:hidden">
          {anchors.split("*").map((anchor, index) => (
            <li key={anchor}>
              <a>{anchor}</a>
            </li>
          ))}
        </ul>
        <div className="font-semibold text-black">
          <a href="">Sign in</a> / <a href="">Explore now</a>
        </div>
        <Hamburger className="hidden max-md:block" />
      </nav>
    </header>
  );
};
