import type { Meta, StoryObj } from "@storybook/react-vite"

import { Row, RowHalf, RowThird } from "../components/row"

const meta = {
  title: "Row",
  component: Row,
  tags: ["autodocs"],
} satisfies Meta<typeof Row>

export default meta
type Story = StoryObj<typeof meta>

export const TwoHalf: Story = {
  args: {
    children: (
      <>
        <RowHalf color="green">Left</RowHalf>
        <RowHalf color="red">Right</RowHalf>
      </>
    ),
  },
}

export const ThreeThird: Story = {
  args: {
    children: (
      <>
        <RowThird color="green">Left</RowThird>
        <RowThird color="red">center</RowThird>
        <RowThird color="blue">Right</RowThird>
      </>
    ),
  },
}
