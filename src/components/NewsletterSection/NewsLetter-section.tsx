import { Button } from "../../UI/Button/Button";
import { SectionTitle } from "../Section-content/Section-Content";

import "./NewsLetter-section.styles.scss";
export const NewsLetterSection = () => {
  return (
    <>
      <section className="container  flex flex-col xl:flex-row  lg:justify-between gap-[2em] items-center">
        <SectionTitle className="lg:flex-shrink-0 max-lg:max-w-[100%]">
          Sign Up for <span className="text-cstm-coral-red">updates</span> &
          Newsletter
        </SectionTitle>
        <form className="w-full lg:max-w-[40ch] flex">
          <label className="label ">
            <input type="mail" className="" />
            <Button>sign up</Button>
          </label>
        </form>
      </section>
    </>
  );
};
