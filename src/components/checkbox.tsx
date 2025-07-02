import type { FC, ReactNode } from "react"
import { Element, type CheckboxProps } from "./element"

interface CustomCheckboxProps extends Omit<CheckboxProps, "mode"> {
  label: string
}

export const Checkbox: FC<CustomCheckboxProps> = (
  props: CustomCheckboxProps,
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
