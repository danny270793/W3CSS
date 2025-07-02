import type { FC, ReactNode } from "react"
import { Element, type InputProps as Base } from "./element"

interface InputProps extends Omit<Base, "mode"> {
  label?: string
  mode?: "text"
}

export const Input: FC<InputProps> = (props: InputProps): ReactNode => {
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
