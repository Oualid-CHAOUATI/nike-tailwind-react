import { ComponentProps, ReactNode } from "react";
import cn from "classnames";

type TSectionContent = {
  title: unknown;
  paragraph: ReactNode;
  button?: ReactNode;
  unlimitParagraph?: true;
};
export function SectionContent(props: TSectionContent) {
  return (
    <div className="flex flex-col gap-[1em] mb-[2em]">
      <SectionTitle>{props.title as ReactNode}</SectionTitle>
      <div
        className={
          "section-paragraphs-container flex flex-col gap-[.6em] mb-[1em] " +
          (Boolean(!props.unlimitParagraph) && " lg:max-w-[50ch] ")
        }
      >
        {props.paragraph}
      </div>
      {Boolean(props.button) && (
        <div className="flex gap-[1em]">{props.button}</div>
      )}
    </div>
  );
}

export const SectionTitle = (
  props: { children: ReactNode } & ComponentProps<"h2">
) => {
  return (
    <h2
      {...props}
      className={cn(
        "section-title text-[2.5em] text-black font-bold capitalize alt-typeface max-w-[20ch]",
        props.className
      )}
      // style={{ maxWidth: "20ch" }}
    >
      {props.children}
    </h2>
  );
};
