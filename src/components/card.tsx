import type { FC, ReactNode } from "react"
import type { W3Color } from "./colors"
import { Div } from "./div"

interface CardProps {
  children?: ReactNode
  elevation?: 2 | 4
  color?: W3Color
  className?: string
}

export const Card: FC<CardProps> = (props: CardProps): ReactNode => {
  return (
    <Div
      color={props.color}
      className={`w3-card-${props.elevation ? props.elevation : 2} ${
        props.className
      }`}
    >
      {props.children}
    </Div>
  )
}
