import type { FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import { Div } from "./div"
import type { Border } from "../constants/border"
import type { Round } from "../constants/round"

interface ContainerProps {
  children?: ReactNode
  className?: string
  color?: Color
  round?: Round
  border?: boolean | Border
  thickBorder?: boolean | Border
}

export const Container: FC<ContainerProps> = (
  props: ContainerProps,
): ReactNode => {
  return (
    <Div
      className={["w3-container", props.className].join(" ")}
      color={props.color}
      round={props.round}
      border={props.border}
      thickBorder={props.thickBorder}
    >
      {props.children}
    </Div>
  )
}
