import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"
import { Button } from "./button"
import { Container } from "./container"

interface ModalProps extends DisplayProps {
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props: ModalProps): ReactNode => {
  return (
    <Element className={`w3-modal`} style={{ display: "block" }}>
      <Element
        {...props}
        style={props.style}
        className={[`w3-modal-content`, props.className].join(" ")}
      >
        <Button
          onClick={() => {
            if (props.onClose) {
              props.onClose()
            }
          }}
          className="w3-display-topright"
        >
          &times;
        </Button>
        <Container>{props.children}</Container>
      </Element>
    </Element>
  )
}
