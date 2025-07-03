import type { FC, ReactNode } from "react"
import { Element, type ImageProps } from "./element"

export const Image: FC<ImageProps> = (props: ImageProps): ReactNode => {
  return (
    <Element
      {...props}
      style={props.style}
      type="img"
      className={["w3-image", props.className].join(" ")}
      src={props.src}
      alt={props.alt}
    />
  )
}
