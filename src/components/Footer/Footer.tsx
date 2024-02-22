import { facebook, instagram, twitter } from "../../assets/icons";
import { footerLogo } from "../../assets/images";

export const Footer = () => {
  return (
    <footer className=" bg-black py-[5em] text-white ">
      <div className="container">
        <div className="flex flex-col gap-[4em] lg:flex-row">
          <div className="logo-wrapper flex flex-col gap-[2em]">
            <img src={footerLogo} alt="footer logo" className="w-[12em]  " />
            <p className="sm:max-w-[40ch] ">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>

            <SocialMediaLinks />
          </div>
          <FooterLinksColsWrapper />
        </div>
        <div className="pt-[6em] flex justify-between">
          <a href="#">&copy; Copyrights.All rights reserved</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

const FooterLinksColsWrapper = () => {
  const sections = [
    {
      title: "Products",
      links: [
        { label: "Air Force 1", href: "hh" },
        { label: "Air Max 1", href: "hh" },
        { label: "Air Jordan 1", href: "hh" },
        { label: "Aike Waffle racer", href: "hh" },
        { label: "Nike Cortez", href: "hh" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "About us", href: "hh" },
        { label: "FAQs", href: "hh" },
        { label: "How it works", href: "hh" },
        { label: "Privacy policy", href: "hh" },
        { label: "Nike cortez", href: "hh" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { label: "customer@niike.com", href: "mailto:hahah" },
        { label: "+92554862354", href: "tel:+92554862354" },
      ],
    },
  ];
  return (
    <div className="flex gap-[5em] lg:justify-between flex-wrap">
      {sections.map((section) => (
        <FooterLinksCol
          title={section.title}
          links={section.links as Record<string, string>[]}
        />
      ))}
    </div>
  );
};

//used in FooterLinksColsWrapper
const FooterLinksCol = (props: {
  title: string;
  links: Record<string, string>[];
}) => {
  return (
    <div className="flex flex-col gap-[2em] ">
      <h5 className="text-1.7em font-semibold">{props.title}</h5>
      <ul className="flex flex-col gap-[.5em]">
        {props.links.map((link) => {
          const label = Object.freeze(link.label);
          const attrs = { ...link };
          delete attrs.label;

          return (
            <li>
              <a {...attrs}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//used directly in footer
const SocialMediaLinks = () => {
  return (
    <div className="flex gap-[1em] pt-[1em] group">
      {[
        { href: "#", img: facebook },
        { href: "#", img: twitter },
        { href: "#", img: instagram },
      ].map(({ href, img }) => (
        <a href={href}>
          <img
            src={img}
            className="bg-white rounded-full p-[1em] hover:scale-110 transition duration-100"
          />
        </a>
      ))}
    </div>
  );
};
