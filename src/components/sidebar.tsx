import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"

interface SidebarProps extends DisplayProps {
  sidebar: ReactNode
}

export const Sidebar: FC<SidebarProps> = (props: SidebarProps): ReactNode => {
  return (
    <>
      <Element
        {...props}
        style={{ ...props.style, width: "25%" }}
        className={[`w3-sidebar w3-bar-block`, props.className].join(" ")}
      >
        {props.sidebar}
      </Element>
      <Element style={{ marginLeft: "25%" }}>{props.children}</Element>
    </>
  )
}
