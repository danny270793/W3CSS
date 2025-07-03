import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

export const Panel: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-panel", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}
