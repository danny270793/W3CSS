import type { FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import { Element } from "./element"
import type { Border } from "../constants/border"
import type { Round } from "../constants/rounds"
import type { Font } from "../constants/fonts"
import type { Size } from "../constants/sizes"

interface ContainerProps {
  children?: ReactNode
  className?: string
  color?: Color
  round?: Round
  border?: boolean | Border
  thickBorder?: boolean | Border
  font?: Font
  size?: Size
  type?: "header" | "footer" | "div"
}

export const Container: FC<ContainerProps> = (
  props: ContainerProps,
): ReactNode => {
  return (
    <Element
      className={["w3-container", props.className].join(" ")}
      color={props.color}
      round={props.round}
      border={props.border}
      thickBorder={props.thickBorder}
      font={props.font}
      size={props.size}
    >
      {props.children}
    </Element>
  )
}
