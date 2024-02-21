import { star } from "../../assets/icons";
import { customer1, customer2 } from "../../assets/images";
import { SectionContent } from "../Section-content/Section-Content";
import "./Testimonials-section.styles.scss";
export const TestemonialsSection = () => {
  return (
    <>
      <section
        id="testemonials-section"
        className="text-center bg-cstm-pale-blue "
      >
        <div className="container">
          <SectionContent
            title={
              <>
                {"what our "}
                <span className="text-cstm-coral-red">customers</span>
                {" say"}
              </>
            }
            paragraph={
              <>
                <p>
                  Hear genuine stories from our satisfied customers about their
                  exceptional experiences with us.
                </p>
              </>
            }
          />

          <TestemonialsCardsWrapper />
        </div>
      </section>
    </>
  );
};

type TTestimonoalCardProps = {
  img: string;
  text: string;
  stars: number;
  name: string;
};
const TestimonoalCard = (props: TTestimonoalCardProps) => {
  return (
    <div className="text-center flex flex-col gap-[1em] items-center group ring max-w-max mx-auto p-[1em] py-[2em] rounded-[1em]">
      <img
        src={props.img}
        alt="user image"
        className="h-[7em] rounded-full  group-hover:ring-8"
      />
      <p className="max-w-[30ch]">{props.text}</p>
      <div className="flex gap-[.5em]">
        <img src={star} alt="star icon" /> <span>({props.stars})</span>
      </div>
      <h4 className="text-[1.3em] font-semibold text-black"> {props.name}</h4>
    </div>
  );
};

const TestemonialsCardsWrapper = () => {
  const reviews: TTestimonoalCardProps[] = [
    {
      img: customer1,
      name: "Morich Brown",
      text: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
      stars: 4.5,
    },
    {
      img: customer2,
      name: "Lota Mongeskar",
      text: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
      stars: 4.5,
    },
  ];
  return (
    <div className="flex-col flex lg:flex-row justify-evenly gap-[3em] pt-[2em]">
      {reviews.map((review) => (
        <TestimonoalCard {...review} />
      ))}
    </div>
  );
};
