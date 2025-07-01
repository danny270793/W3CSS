import type { FC, ReactNode } from "react";
import type { Color } from "./colors";
import type { Border } from "./border";

interface DivProps {
  children?: ReactNode;
  className?: string;
  color?: Color;
  border?: boolean | Border;
}

export const Div: FC<DivProps> = (props: DivProps): ReactNode => {
  return (
    <div
      className={`${props.className} ${props.color} ${
        props.border === true ? "w3-border" : ""
      } ${
        props.border instanceof Object && props.border.top
          ? "w3-border-top"
          : ""
      }`}
    >
      {props.children}
    </div>
  );
};
