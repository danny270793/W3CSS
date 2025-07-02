import type { FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import type { Border } from "../constants/border"
import type { Round } from "../constants/round"

interface DivProps {
  children?: ReactNode
  className?: string
  color?: Color
  border?: boolean | Border
  round?: Round
}

export const Div: FC<DivProps> = (props: DivProps): ReactNode => {
  const classNames: string[] = []
  if (props.className) {
    classNames.push(props.className)
  }
  if (props.color) {
    classNames.push(`w3-${props.color}`)
  }
  if (typeof props.border === "boolean") {
    classNames.push(`w3-border${props.border ? "" : "-0"}`)
  } else if (typeof props.border === "object") {
    if (props.border.top) {
      classNames.push("w3-border-top")
    }
    if (props.border.bottom) {
      classNames.push("w3-border-bottom")
    }
    if (props.border.left) {
      classNames.push("w3-border-left")
    }
    if (props.border.right) {
      classNames.push("w3-border-right")
    }
    if (props.border.color) {
      classNames.push(`w3-border-${props.border.color}`)
    }
    if (props.border.hover) {
      classNames.push(`w3-hover-border-${props.border.hover}`)
    }
  }
  if (props.round) {
    classNames.push(`w3-round-${props.round}`)
  }
  return <div className={classNames.join(" ")}>{props.children}</div>
}
