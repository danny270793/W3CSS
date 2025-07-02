import type { FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import { Div } from "./div"
import type { Border } from "../constants/border"
import type { Round } from "../constants/rounds"
import type { Font } from "../constants/fonts"

interface PanelProps {
  children?: ReactNode
  className?: string
  color?: Color
  round?: Round
  border?: boolean | Border
  thickBorder?: boolean | Border
  font?: Font
}

export const Panel: FC<PanelProps> = (props: PanelProps): ReactNode => {
  return (
    <Div
      className={["w3-panel", props.className].join(" ")}
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
