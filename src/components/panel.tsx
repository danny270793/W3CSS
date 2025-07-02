import type { FC, ReactNode } from "react"
import { Element, type ElementProps } from "./element"

export const Panel: FC<ElementProps> = (props: ElementProps): ReactNode => {
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
