import type { FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import { Div } from "./div"
import type { Border } from "../constants/border"
import type { Round } from "../constants/round"

interface CardProps {
  children?: ReactNode
  className?: string
  elevation?: 2 | 4
  color?: Color
  border?: boolean | Border
  round?: Round
}

export const Card: FC<CardProps> = (props: CardProps): ReactNode => {
  return (
    <Div
      className={[
        `w3-card-${props.elevation ? props.elevation : 2}`,
        props.className,
      ].join(" ")}
      color={props.color}
      round={props.round}
      border={props.border}
    >
      {props.children}
    </Div>
  )
}
