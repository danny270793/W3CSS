import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

export const Row: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-row`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const RowHalf: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-half`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const RowThird: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-third`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}
