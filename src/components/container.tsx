import type { FC, ReactNode } from "react"
import type { Color } from "./colors"
import { Div } from "./div"
import type { Border } from "./border"

interface ContainerProps {
  children?: ReactNode
  color?: Color
  className?: string
  border?: boolean | Border
}

export const Container: FC<ContainerProps> = (
  props: ContainerProps,
): ReactNode => {
  return (
    <Div
      color={props.color}
      className={["w3-container", props.className].join(" ")}
      border={props.border}
    >
      {props.children}
    </Div>
  )
}
