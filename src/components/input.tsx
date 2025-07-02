import type { FC, ReactNode } from "react"
import { Element, type InputProps } from "./element"

interface CustomInputProps extends Omit<InputProps, "mode"> {
  label?: string
  mode?: "text"
}

export const Input: FC<CustomInputProps> = (
  props: CustomInputProps,
): ReactNode => {
  return (
    <>
      {props.label && (
        <label>
          <strong>{props.label}</strong>
        </label>
      )}
      <Element
        {...props}
        type="input"
        mode={props.mode || "text"}
        value={props.value}
        placeholder={props.placeholder}
        className={["w3-input", props.className].join(" ")}
      />
    </>
  )
}
