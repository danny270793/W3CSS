import type { FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import { Div } from "./div"
import type { Border } from "../constants/border"
import type { Round } from "../constants/round"
import type { Font } from "../constants/fonts"

interface CardProps {
  children?: ReactNode
  className?: string
  elevation?: 2 | 4
  color?: Color
  round?: Round
  border?: boolean | Border
  thickBorder?: boolean | Border
  font?: Font
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
      thickBorder={props.thickBorder}
      font={props.font}
    >
      {props.children}
    </Div>
  )
}
