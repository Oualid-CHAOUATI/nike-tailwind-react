import { headerLogo } from "../../assets/images";
import { Hamburger } from "../../UI/Hamburger/Hamburger";
import "./Nav.styles.scss";
export const SECTIONS_ANCHORS = {
  popular: { link: "#popular", label: "popular products" },
  quality: { link: "#quality", label: "quality" },
  services: { link: "#services", label: "services" },
  specialOffer: { link: "#specialOffer", label: "special offer" },
  testemonials: { link: "#testemonials", label: "testemonials" },
  newsletter: { link: "#newsletter", label: "newsleter" },
};

// export const Nav = () => {
//   const entries = Object.entries(SECTIONS_ANCHORS);
//   console.log(entries);
//   return <h1>HELLO</h1>;
// };

export const Nav = () => {
  return (
    <header className=" py-[1em] fixed  left-0 right-0 z-[3]   backdrop-blur-md    ">
      <nav id="nav" className="container flex items-center justify-between ">
        <a href="#">
          <img src={headerLogo} alt="header-logo" />
        </a>
        <ul id="nav-links-ul" className="flex font-medium gap-1em">
          {Object.entries(SECTIONS_ANCHORS).map(([key, value]) => (
            <li key={key}>
              <a href={value.link}>{value.label}</a>
            </li>
          ))}
        </ul>
        <div className="font-semibold text-black">
          <a href="">Sign in</a> / <a href="">Explore now</a>
        </div>
        <Hamburger id="hamburger" className="hidden " />
      </nav>
    </header>
  );
};
