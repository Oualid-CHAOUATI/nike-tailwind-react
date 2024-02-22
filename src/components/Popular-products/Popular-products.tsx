import { SectionContent } from "../Section-content/Section-Content";
import { Button } from "../../UI/Button/Button";
import { star } from "../../assets/icons";
import { shoe4, shoe5, shoe6, shoe7 } from "../../assets/images";
import { ComponentProps } from "react";

import "./Popular-products.styles.scss";
export const PopularProducts = (props: ComponentProps<"section">) => {
  return (
    <section className="container" id={props.id}>
      <SectionContent
        title={
          <>
            {"Our "} <span className="text-cstm-coral-red">Popular</span>
            {" Products"}
          </>
        }
        paragraph={
          <>
            <p>
              Experience top-notch quality and style with our sought-after
              selections. Discover a world of comfort, design, and value
            </p>
          </>
        }
        button={<Button>Buy</Button>}
      />

      <div className="flex flex-wrap justify-center lg:justify-between gap-2.5em" data-class="product-cards-wrapper">
        {products.map((product) => (
          <ProductCard
            img={product.img}
            name={product.name}
            price={product.price}
            stars={product.stars}
          />
        ))}
      </div>
    </section>
  );
};

type TProductCardProps = {
  img: string;
  stars: number;
  name: string;
  price: string;
};
const ProductCard = (props: TProductCardProps) => {
  return (
    <div className="flex flex-col gap-[.3em]  " data-class="product-card">
      <div className="h-[15em] aspect-square">
        <img
          src={props.img}
          alt={props.img}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="flex gap-[.5em] mt-[1em]">
        <img src={star} alt="star icon" />
        <span>({props.stars})</span>
      </div>

      <div className="flex flex-col gap-[inherit] text-[1.3em] font-semibold">
        <h4 className="text-black">{props.name}</h4>
        <p className="text-cstm-slate-gray">{props.price}</p>
      </div>
    </div>
  );
};
const products: TProductCardProps[] = [
  {
    img: shoe4,
    name: "Nike air jordan-01",
    stars: 4.5,
    price: "$200.20",
  },
  {
    img: shoe5,
    name: "Nike air jordan-10",
    stars: 4.5,
    price: "$210.20",
  },
  {
    img: shoe6,
    name: "Nike air jordan-100",
    stars: 4.5,
    price: "$220.20",
  },
  {
    img: shoe7,
    name: "Nike air jordan-001",
    stars: 4.5,
    price: "$230.20",
  },
];
