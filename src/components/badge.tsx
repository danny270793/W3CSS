import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

export const Badge: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-badge`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}
