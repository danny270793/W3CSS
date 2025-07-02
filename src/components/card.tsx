import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

interface CardProps extends DisplayProps {
  elevation?: 2 | 4
}

export const Card: FC<CardProps> = (props: CardProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[
        `w3-card-${props.elevation ? props.elevation : 2}`,
        props.className,
      ].join(" ")}
    >
      {props.children}
    </Element>
  )
}
