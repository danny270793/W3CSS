import type { FC, ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export const Card: FC<CardProps> = (props: CardProps): ReactNode => {
  return <div className="w3-card">{props.children}</div>;
};
