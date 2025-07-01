import type { FC, ReactNode } from "react"
import type { W3Color } from "./colors"
import { Div } from "./div"

interface PanelProps {
  children?: ReactNode
  color?: W3Color
  className?: string
}

export const Panel: FC<PanelProps> = (props: PanelProps): ReactNode => {
  return (
    <Div color={props.color} className={`w3-panel ${props.className}`}>
      {props.children}
    </Div>
  )
}
