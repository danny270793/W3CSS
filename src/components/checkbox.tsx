import type { FC, ReactNode } from "react"
import { Element, type CheckboxProps as Base } from "./element"

export interface CheckboxProps extends Omit<Base, "mode"> {
  label: string
}

export const Checkbox: FC<CheckboxProps> = (
  props: CheckboxProps,
): ReactNode => {
  return (
    <>
      <Element
        {...props}
        checked={props.checked}
        type="input"
        mode="checkbox"
        className={["w3-check w3-margin-right", props.className].join(" ")}
      />
      <label>{props.label}</label>
    </>
  )
}
