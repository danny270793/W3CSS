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

export const RowTwoThird: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-twothird`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const RowQuarter: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-quarter`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const RowThreeQuarter: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-threequarter`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const RowRest: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-rest`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const RowCol: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-col`, props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}
