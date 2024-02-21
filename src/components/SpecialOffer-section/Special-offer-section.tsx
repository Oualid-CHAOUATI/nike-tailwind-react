import { Button } from "../../UI/Button/Button";
import { ArrowRightCmp } from "../../assets/icons/arrow-right-cmp";
import { offer } from "../../assets/images";
import { SectionContent } from "../Section-content/Section-Content";

export const SpecialOfferSection = () => {
  return (
    <>
      <section className="container lg:flex lg:flex-row-reverse lg:justify-between lg:gap[1em] lg:items-center">
        <SectionContent
          unlimitParagraph
          title={
            <>
              <span className="text-cstm-coral-red">special</span>
              {" offer"}
            </>
          }
          paragraph={
            <>
              <p>
                Embark on a shopping journey that redefines your experience with
                unbeatable deals. From premier selections to incredible savings,
                we offer unparalleled value that sets us apart.
              </p>
              <p>
                Navigate a realm of possibilities designed to fulfill your
                unique desires, surpassing the loftiest expectations. Your
                journey with us is nothing short of exceptional.
              </p>
            </>
          }
          button={
            <>
              <Button icon={<ArrowRightCmp />}>Shop now</Button>
              <Button btnType="secondary">learn more</Button>
            </>
          }
        />
        <div className="lg:basis-[100%]">
          <img
            src={offer}
            className="lg:inset-0 lg:h-full  h-[24em] mx-auto lg:ml-0"
          />
        </div>
      </section>
    </>
  );
};
