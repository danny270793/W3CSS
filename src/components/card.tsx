import type { FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import { Element } from "./element"
import type { Border } from "../constants/border"
import type { Round } from "../constants/rounds"
import type { Font } from "../constants/fonts"
import type { Size } from "../constants/sizes"
import type { Type } from "../constants/types"

interface CardProps {
  children?: ReactNode
  className?: string
  elevation?: 2 | 4
  color?: Color
  round?: Round
  border?: boolean | Border
  thickBorder?: boolean | Border
  font?: Font
  size?: Size
  type?: Type
}

export const Card: FC<CardProps> = (props: CardProps): ReactNode => {
  return (
    <Element
      className={[
        `w3-card-${props.elevation ? props.elevation : 2}`,
        props.className,
      ].join(" ")}
      color={props.color}
      round={props.round}
      border={props.border}
      thickBorder={props.thickBorder}
      font={props.font}
      size={props.size}
      type={props.type}
    >
      {props.children}
    </Element>
  )
}
