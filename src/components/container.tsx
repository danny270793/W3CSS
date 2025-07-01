import type { FC, ReactNode } from "react";
import type { Color } from "./colors";
import { Div } from "./div";

interface ContainerProps {
  children?: ReactNode;
  color?: Color;
  className?: string;
}

export const Container: FC<ContainerProps> = (
  props: ContainerProps,
): ReactNode => {
  return (
    <Div color={props.color} className={`w3-container ${props.className}`}>
      {props.children}
    </Div>
  );
};
