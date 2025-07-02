import type { FC, ReactNode } from "react"
import { Element, type InputProps } from "./element"

interface CustomInputProps extends InputProps {
  label?: string
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
        className={["w3-input", props.className].join(" ")}
      />
    </>
  )
}
