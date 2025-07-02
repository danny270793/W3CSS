import type { FC, ReactNode } from "react"
import { Element, type ElementProps } from "./element"

interface ButtonProps extends ElementProps {
  block?: boolean
}

export const Button: FC<ButtonProps> = (props: ButtonProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      type="button"
      className={["w3-button", props.block ? "w3-block" : ""].join(" ")}
    >
      {props.children}
    </Element>
  )
}
