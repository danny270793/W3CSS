import type { FC, ReactNode } from "react"
import type { Color } from "./colors"
import { Div } from "./div"
import type { Border } from "./border"

interface CardProps {
  children?: ReactNode
  elevation?: 2 | 4
  color?: Color
  className?: string
  border?: boolean | Border
}

export const Card: FC<CardProps> = (props: CardProps): ReactNode => {
  return (
    <Div
      color={props.color}
      border={props.border}
      className={[
        `w3-card-${props.elevation ? props.elevation : 2}`,
        props.className,
      ].join(" ")}
    >
      {props.children}
    </Div>
  )
}
