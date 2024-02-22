import { Button } from "../../UI/Button/Button";
import { ArrowRightCmp } from "../../assets/icons/arrow-right-cmp";
import { bigShoe1, bigShoe2, bigShoe3 } from "../../assets/images";
import { useState } from "react";
import cn from "classnames";

const Statistics = () => {
  const stats = {
    Brands: "1K+",
    Shops: "500+",
    Customers: "250K+",
  };
  return (
    <div className="flex gap-[2em]">
      {Object.entries(stats).map(([text, number]) => {
        return (
          <div className="pt-[3em]">
            <h3 className="text-[1.5em] font-bold text-black alt-typeface">
              {number}
            </h3>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

const Left = () => {
  return (
    <div
      className={
        space("lg:whitespace-nowrap lg:padding-x-l lg:shrink-0 lg:w-[35%]") +
        "padding-x flex flex-col gap-[2em] flex-grow-0   z-[1] pt-[3em] lg:pt-[7em]   padding-y-b"
      }
    >
      <p className="text-coral-red">Our Summer collections</p>

      <h1 className="text-[4em] font-bold text-black  leading-[1.4em]  alt-typeface">
        <span className="bg-white rounded-full p-[.2em] pl-0 pr-[.3em]">
          The New Arrival
        </span>
        <br />
        <span className="text-cstm-coral-red">Nike</span> Shoes
      </h1>

      <p className="max-w-[40ch] whitespace-normal">
        Discover stylish Nike arrivals, quality comfortn and innovation for your
        active life
      </p>
      {/* entouré d'une div parceque comme le parent est grid, le button se comporte en full-width par défaut
        
        
        *donc j'ai rajouté le div pour éliminer le comportement fullwidth par défaut
        */}
      <div>
        <Button icon={<ArrowRightCmp />}>Shop now</Button>
      </div>
      <Statistics />
    </div>
  );
};

const Right = () => {
  const shoes = [bigShoe1, bigShoe2, bigShoe3];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className={
        "bg-blue-300  flex flex-col  justify-between mb- place-items-center relative flex-1 padding-x-r   pt-[2em]" +
        space("lg:grow")
      }
    >
      <div
        className={
          ` w-full aspect-square relative h-[300px] ` +
          space("lg:w-auto lg:h-full")
        }
      >
        {shoes.map((shoe, index) => {
          return (
            <img
              src={shoe}
              alt="shoe"
              className={cn(
                "w-full h-full object-contain  transition duration-300 absolute inset-0 opacity-0 ",
                {
                  "opacity-100 translate-x-0 ": index == currentIndex,
                }
              )}
              key={index}
            />
          );
        })}
      </div>

      <div className=" flex justify-between gap-[1em] px-[1em]   top-full translate-y-1/2 z-[2]">
        {shoes.map((shoe, index) => {
          return (
            <button
              className={cn(
                "shadow-3xl rounded-[1em] p-[1em] max-w-[10em] aspect-square transition ",
                {
                  "ring-black ring-[.05em]  rounded-full":
                    currentIndex == index,
                }
              )}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={shoe} alt="shoe" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
export const Hero = () => {
  return (
    <section id="hero" className={`width-container  mb-[2em] ` + "lg:flex "}>
      <Left />
      <Right />
    </section>
  );
};

// const [breakPointLg, breakPointLgMax] = breakPointMaker("lg");

// function breakPointMaker(screenSize: string) {
//   const getReducer = (classString: string, isMax: boolean = false) => {
//     return " " + (isMax ? "max-" : "") + `${screenSize}:${classString} `;
//   };
//   function make(isMax: boolean) {
//     return (str: string) => {
//       return (
//         " " +
//         str.split(" ").reduce((acc, str) => {
//           acc += getReducer(str, isMax);
//           return acc;
//         }, "") +
//         " "
//       );
//     };
//   }

//   return [make(false), make(true)];
// }

function space(str: string) {
  return ` ${str} `;
}
