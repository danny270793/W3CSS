import type { FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import { Element } from "./element"
import type { Border } from "../constants/border"
import type { Round } from "../constants/rounds"
import type { Font } from "../constants/fonts"
import type { Size } from "../constants/sizes"
import type { Type } from "../constants/types"

interface PanelProps {
  children?: ReactNode
  className?: string
  color?: Color
  round?: Round
  border?: boolean | Border
  thickBorder?: boolean | Border
  font?: Font
  size?: Size
  type?: Type
  center?: boolean
}

export const Panel: FC<PanelProps> = (props: PanelProps): ReactNode => {
  return (
    <Element
      className={["w3-panel", props.className].join(" ")}
      color={props.color}
      round={props.round}
      border={props.border}
      thickBorder={props.thickBorder}
      font={props.font}
      size={props.size}
      type={props.type}
      center={props.center}
    >
      {props.children}
    </Element>
  )
}
