import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

export const Tag: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-tag`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}
