import type { FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import type { Border } from "../constants/border"
import type { Round } from "../constants/rounds"
import type { Font } from "../constants/fonts"
import type { Size } from "../constants/sizes"

interface ElementProps {
  children?: ReactNode
  className?: string
  color?: Color
  border?: boolean | Border
  thickBorder?: boolean | Border
  round?: Round
  font?: Font
  size?: Size
}

export const Element: FC<ElementProps> = (props: ElementProps): ReactNode => {
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
  if (typeof props.thickBorder === "boolean") {
    if (props.thickBorder) {
      classNames.push("w3-topbar w3-bottombar w3-leftbar w3-rightbar")
    }
  } else if (typeof props.thickBorder === "object") {
    if (props.thickBorder.top) {
      classNames.push("w3-topbar")
    }
    if (props.thickBorder.bottom) {
      classNames.push("w3-bottombar")
    }
    if (props.thickBorder.left) {
      classNames.push("w3-leftbar")
    }
    if (props.thickBorder.right) {
      classNames.push("w3-rightbar")
    }
    if (props.thickBorder.color) {
      classNames.push(`w3-border-${props.thickBorder.color}`)
    }
    if (props.thickBorder.hover) {
      classNames.push(`w3-hover-border-${props.thickBorder.hover}`)
    }
  }
  if (props.round) {
    if (props.round === "normal") {
      classNames.push(`w3-round`)
    } else {
      classNames.push(`w3-round-${props.round}`)
    }
  }
  if (props.font) {
    classNames.push(`w3-${props.font}`)
  }
  if (props.size) {
    if (props.size !== "normal") {
      classNames.push(`w3-${props.round}`)
    }
  }
  return <div className={classNames.join(" ")}>{props.children}</div>
}
