import type { CSSProperties, FC, ReactNode } from "react"
import type { Color } from "../constants/colors"
import type { Border } from "../constants/border"
import type { Round } from "../constants/rounds"
import type { Font } from "../constants/fonts"
import type { Size } from "../constants/sizes"
import type { Type } from "../constants/types"
import type { TextAlign } from "../constants/text-align"
import type { Padding } from "../constants/padding"

export interface ElementProps {
  children?: ReactNode
  className?: string
  color?: Color
  border?: boolean | Border
  thickBorder?: boolean | Border
  round?: Round
  font?: Font
  size?: Size
  type?: Type
  center?: boolean
  hoverColor?: Color
  textAlign?: TextAlign
  padding?: Padding
  circle?: boolean
  ripple?: boolean
  style?: CSSProperties | undefined
  opaque?: boolean
  disabled?: boolean
  wide?: boolean
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
      classNames.push(`w3-${props.size}`)
    }
  }
  if (props.center) {
    classNames.push("w3-center")
  }
  if (props.hoverColor) {
    classNames.push(`w3-hover-${props.hoverColor}`)
  }
  if (props.textAlign === "left") {
    classNames.push("w3-left-align")
  } else if (props.textAlign === "right") {
    classNames.push("w3-right-align")
  }
  if (props.padding) {
    classNames.push(`w3-padding-${props.padding}`)
  }
  if (props.circle) {
    classNames.push(`w3-circle`)
  }
  if (props.ripple) {
    classNames.push(`w3-ripple`)
  }
  if (props.opaque) {
    classNames.push(`w3-opacity`)
  }
  if (props.disabled) {
    classNames.push(`w3-disabled`)
  }
  if (props.wide) {
    classNames.push(`w3-wide`)
  }

  switch (props.type || "div") {
    case "div":
      return (
        <div className={classNames.join(" ")} style={props.style}>
          {props.children}
        </div>
      )
    case "header":
      return (
        <header className={classNames.join(" ")} style={props.style}>
          {props.children}
        </header>
      )
    case "footer":
      return (
        <footer className={classNames.join(" ")} style={props.style}>
          {props.children}
        </footer>
      )
    case "button":
      return (
        <button className={classNames.join(" ")} style={props.style}>
          {props.children}
        </button>
      )
  }
}
