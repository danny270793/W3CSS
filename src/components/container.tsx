import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

export const Container: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
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
