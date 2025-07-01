import type { FC, ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  elevation?: 2 | 4;
}

export const Card: FC<CardProps> = (props: CardProps): ReactNode => {
  return (
    <div className={`w3-card-${props.elevation ? props.elevation : 2}`}>
      {props.children}
    </div>
  );
};
