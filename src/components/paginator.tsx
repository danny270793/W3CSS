import type { FC, ReactNode } from "react"
import { Element, type DisplayProps } from "./element"
import { Button } from "./button"

export interface PaginatorProps extends DisplayProps {
  currentPage: number
  totalPages: number
  onNavigateTo?: (page: number) => void
}

export const Paginator: FC<PaginatorProps> = (
  props: PaginatorProps,
): ReactNode => {
  return (
    <Element className="w3-bar">
      <Button
        onClick={() => {
          if (props.onNavigateTo) {
            props.onNavigateTo(props.currentPage - 1)
          }
        }}
      >
        &laquo;
      </Button>
      {Array.from({ length: props.totalPages }, (_, i) => (
        <Button
          key={i + 1}
          onClick={() => {
            if (props.onNavigateTo) {
              props.onNavigateTo(i + 1)
            }
          }}
          className={`${props.currentPage === i + 1 ? "w3-blue" : ""}`}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        onClick={() => {
          if (props.onNavigateTo) {
            props.onNavigateTo(props.currentPage + 1)
          }
        }}
      >
        &raquo;
      </Button>
    </Element>
  )
}
