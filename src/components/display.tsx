import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

export const Display: FC<DisplayProps> = (props: DisplayProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-container", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const DisplayTopMiddle: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-topmiddle", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const DisplayTopLeft: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-topleft", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const DisplayTopRight: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-topright", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const DisplayBottomMiddle: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-bottommiddle", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const DisplayBottomLeft: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-bottomleft", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const DisplayBottomRight: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-bottomright", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const DisplayMiddle: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-middle", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const DisplayLeft: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-left", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}

export const DisplayRight: FC<DisplayProps> = (
  props: DisplayProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={["w3-display-right", props.className].join(" ")}
    >
      {props.children}
    </Element>
  )
}
