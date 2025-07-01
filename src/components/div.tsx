import type { FC, ReactNode } from "react"
import type { W3Color } from "./colors"
import type { Border } from "./border"

interface DivProps {
  children?: ReactNode
  className?: string
  color?: W3Color
  border?: boolean | Border
}

export const Div: FC<DivProps> = (props: DivProps): ReactNode => {
  return (
    <div
      className={`${props.className} ${props.color} ${props.border instanceof Boolean ? `w3-border${props.border ? "" : "-0"}` : ""} ${
        props.border instanceof Object && props.border.top
          ? "w3-border-top"
          : ""
      } ${
        props.border instanceof Object && props.border.bottom
          ? "w3-border-bottom"
          : ""
      } ${
        props.border instanceof Object && props.border.left
          ? "w3-border-left"
          : ""
      } ${
        props.border instanceof Object && props.border.right
          ? "w3-border-right"
          : ""
      } ${
        props.border instanceof Object && props.border.color
          ? `w3-border-${props.border.color}`
          : ""
      }`}
    >
      {props.children}
    </div>
  )
}
