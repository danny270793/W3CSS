import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

interface ButtonProps extends DisplayProps {
  block?: boolean
}

export const Button: FC<ButtonProps> = (props: ButtonProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      type="button"
      className={[
        "w3-button",
        props.block ? "w3-block" : "",
        props.className,
      ].join(" ")}
    >
      {props.children}
    </Element>
  )
}
