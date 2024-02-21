import cn from "classnames";
import { ComponentProps, ReactNode } from "react";
import "./Button.styles.scss";

type TButton = {
  children: ReactNode;
  btnType?: "primary" | "secondary";
  icon?: ReactNode;
  fullWidth?: true;
} & ComponentProps<"button">;

export const Button = ({
  children,
  btnType = "primary",
  icon,
  fullWidth,
  ...otherProps
}: TButton) => {
  return (
    <button
      {...otherProps}
      className={cn(
        "btn",
        `btn--${btnType}`,
        {
          "btn--with-icon": Boolean(icon),
        },
        {
          "btn--full-width": Boolean(fullWidth),
        },
        otherProps.className
      )}
    >
      {children}
      {Boolean(icon) && <span>{icon || ""}</span>}
    </button>
  );
};
