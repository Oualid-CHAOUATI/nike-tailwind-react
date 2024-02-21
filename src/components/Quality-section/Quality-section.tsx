import { Button } from "../../UI/Button/Button";
import { shoe8 } from "../../assets/images";
import { SectionContent } from "../Section-content/Section-Content";

export const QualitySection = () => {
  return (
    <>
      <section className="container lg:flex lg:justify-between lg:gap[1em]">
        <SectionContent
          title={
            <>
              {"we provide you "}{" "}
              <span className="text-cstm-coral-red">super suality</span>
              {" shoes"}
            </>
          }
          paragraph={
            <>
              <p>
                Ensuring premium comfort and style, our meticulously crafted
                footwear is designed to elevate your experience, providing you
              </p>
              <p>
                Our dedication to detail and excellence ensures your
                satisfaction
              </p>
            </>
          }
          button={<Button>View details</Button>}
        />
        <div>
          <img src={shoe8} className="mx-auto" />
        </div>
      </section>
    </>
  );
};
