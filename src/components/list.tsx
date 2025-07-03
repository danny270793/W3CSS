import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

export const List: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-ul", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const ListItem: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      type="li"
      style={props.style}
      className={props.className}
    >
      {props.children}
    </Element>
  )
}
