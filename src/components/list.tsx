import type { FC, ReactNode } from "react"
import { Element, type ElementProps } from "./element"

export const List: FC<ElementProps> = (props: ElementProps): ReactNode => {
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

export const ListItem: FC<ElementProps> = (props: ElementProps): ReactNode => {
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
