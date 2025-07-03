import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Row,
  RowCol,
  RowHalf,
  RowQuarter,
  RowRest,
  RowThird,
  RowThreeQuarter,
  RowTwoThird,
} from "../components/row"

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

export const TwoThird: Story = {
  args: {
    children: (
      <>
        <RowTwoThird color="green">Left</RowTwoThird>
        <RowThird color="blue">Right</RowThird>
      </>
    ),
  },
}

export const Quarter: Story = {
  args: {
    children: (
      <>
        <RowQuarter color="green">1</RowQuarter>
        <RowQuarter color="blue">2</RowQuarter>
        <RowQuarter color="green">3</RowQuarter>
        <RowQuarter color="blue">4</RowQuarter>
      </>
    ),
  },
}

export const ThreeQuarter: Story = {
  args: {
    children: (
      <>
        <RowThreeQuarter color="green">1</RowThreeQuarter>
        <RowQuarter color="blue">2</RowQuarter>
      </>
    ),
  },
}

export const Combination: Story = {
  args: {
    children: (
      <>
        <RowQuarter color="green">1</RowQuarter>
        <RowHalf color="blue">2</RowHalf>
        <RowQuarter color="green">3</RowQuarter>
      </>
    ),
  },
}

export const Rest: Story = {
  args: {
    children: (
      <>
        <RowCol color="green" style={{ width: "100px" }}>
          1
        </RowCol>
        <RowRest color="blue">2</RowRest>
      </>
    ),
  },
}
