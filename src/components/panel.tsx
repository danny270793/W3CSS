import type { FC, ReactNode } from "react"
import type { Color } from "./colors"
import { Div } from "./div"
import type { Border } from "./border"

interface PanelProps {
  children?: ReactNode
  color?: Color
  className?: string
  border?: boolean | Border
}

export const Panel: FC<PanelProps> = (props: PanelProps): ReactNode => {
  return (
    <Div
      color={props.color}
      border={props.border}
      className={["w3-panel", props.className].join(" ")}
    >
      {props.children}
    </Div>
  )
}
