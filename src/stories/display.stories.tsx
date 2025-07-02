import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Display,
  DisplayBottomLeft,
  DisplayBottomMiddle,
  DisplayBottomRight,
  DisplayLeft,
  DisplayMiddle,
  DisplayRight,
  DisplayTopLeft,
  DisplayTopMiddle,
  DisplayTopRight,
} from "../components/display"

const meta = {
  title: "Display",
  component: Display,
  tags: ["autodocs"],
} satisfies Meta<typeof Display>

export default meta
type Story = StoryObj<typeof meta>

export const FullMargin: Story = {
  args: {
    children: (
      <>
        <DisplayTopLeft>Top left</DisplayTopLeft>
        <DisplayTopMiddle>Top middle</DisplayTopMiddle>
        <DisplayTopRight>Top right</DisplayTopRight>

        <DisplayLeft>Left</DisplayLeft>
        <DisplayMiddle>Middle</DisplayMiddle>
        <DisplayRight>Right</DisplayRight>

        <DisplayBottomLeft>Bottom left</DisplayBottomLeft>
        <DisplayBottomMiddle>Bottom middle</DisplayBottomMiddle>
        <DisplayBottomRight>Bottom right</DisplayBottomRight>
      </>
    ),
    style: { height: "100px" },
    color: "green",
  },
}
