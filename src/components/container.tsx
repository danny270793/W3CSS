import type { FC, ReactNode } from "react"
import type { W3Color } from "./colors"
import { Div } from "./div"

interface ContainerProps {
  children?: ReactNode
  color?: W3Color
  className?: string
}

export const Container: FC<ContainerProps> = (
  props: ContainerProps,
): ReactNode => {
  return (
    <Div color={props.color} className={`w3-container ${props.className}`}>
      {props.children}
    </Div>
  )
}
