import type { FC, ReactNode } from "react"
import { Element, type RadioProps as Base } from "./element"

export interface RadioProps extends Omit<Base, "mode"> {
  label: string
}

export const Radio: FC<RadioProps> = (props: RadioProps): ReactNode => {
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
