import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"
import { Button } from "./button"

export interface DropdownProps extends DisplayProps {
  label: string
}

export const Dropdown: FC<DropdownProps> = (
  props: DropdownProps,
): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      className={[`w3-dropdown-hover`, props.className].join(" ")}
    >
      <Button className="w3-button">{props.label}</Button>
      <Element className="w3-dropdown-content w3-bar-block" border>
        {props.children}
      </Element>
    </Element>
  )
}
