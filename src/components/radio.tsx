import type { FC, ReactNode } from "react"
import { Element, type RadioProps } from "./element"

interface CustomCheckboxProps extends Omit<RadioProps, "mode"> {
  label: string
}

export const Radio: FC<CustomCheckboxProps> = (
  props: CustomCheckboxProps,
): ReactNode => {
  return (
    <>
      <Element
        {...props}
        selected={props.selected}
        value={props.value}
        type="input"
        mode="radio"
        className={["w3-radio w3-margin-right", props.className].join(" ")}
      />
      <label>{props.label}</label>
    </>
  )
}
