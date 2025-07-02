import type { FC, ReactNode } from "react"
import { Element, type ElementProps } from "./element"

export const Container: FC<ElementProps> = (props: ElementProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-container", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}
