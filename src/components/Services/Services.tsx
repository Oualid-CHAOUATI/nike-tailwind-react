import { Button } from "../../UI/Button/Button";
import { shieldTick, support, truckFast } from "../../assets/icons";
import { shoe8 } from "../../assets/images";
import { SectionContent } from "../Section-content/Section-Content";

export const Services = () => {
  const servicesArray: TServiceCardProps[] = [
    {
      icon: truckFast,
      title: "free shipping",
      text: "enjoy seamless shopping with our complimentary shipping service",
    },
    {
      icon: shieldTick,
      title: "secure payment",
      text: "experience worry-free transactions with our secure payment options",
    },
    {
      icon: support,
      title: "love to help you",
      text: "our dedicated team is here to assist every step of the way",
    },
  ];
  return (
    <>
      <section className="container flex justify-between gap-[2em] flex-wrap">
        {servicesArray.map((service) => (
          <ServiceCard
            icon={service.icon}
            title={service.title}
            text={service.text}
          />
        ))}
      </section>
    </>
  );
};

type TServiceCardProps = {
  icon: string;
  title: string;
  text: string;
};
const ServiceCard = (props: TServiceCardProps) => {
  return (
    <div className="p-[1em] py-[3em]  basis-[20em] flex-grow  shadow-3xl shadow-slate-300  rounded-[1em]">
      <img
        src={props.icon}
        alt="icon"
        className="p-[.5em] bg-cstm-coral-red rounded-full h-[2.7em]"
      />
      <h4 className="text-[1.3em] text-black font-semibold pt-[1em] pb-[.5em]">
        {props.title}
      </h4>

      <p>{props.text}</p>
    </div>
  );
};
