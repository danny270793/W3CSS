import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

export interface BarProps extends DisplayProps {
  direction?: "horizontal" | "vertical"
}

export const Bar: FC<BarProps> = (props: BarProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[
        `w3-bar${props.direction === "vertical" ? "-block" : ""}`,
        props.className,
      ].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const BarItem: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-bar-item", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}
