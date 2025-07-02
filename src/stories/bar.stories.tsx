import type { Meta, StoryObj } from "@storybook/react-vite"

import { Bar, BarItem } from "../components/bar"

const meta = {
  title: "Bar",
  component: Bar,
  tags: ["autodocs"],
} satisfies Meta<typeof Bar>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    children: (
      <>
        <BarItem>Item 1</BarItem>
        <BarItem>Item 2</BarItem>
        <BarItem>Item 3</BarItem>
      </>
    ),
    color: "blue",
  },
}

export const Vertical: Story = {
  args: {
    children: (
      <>
        <BarItem>Item 1</BarItem>
        <BarItem>Item 2</BarItem>
        <BarItem>Item 3</BarItem>
      </>
    ),
    color: "blue",
    direction: "vertical",
    style: { width: "200px" },
  },
}

export const Hoverable: Story = {
  args: {
    children: (
      <>
        <BarItem hoverColor="light-gray">Item 1</BarItem>
        <BarItem hoverColor="light-gray">Item 2</BarItem>
        <BarItem hoverColor="light-gray">Item 3</BarItem>
      </>
    ),
    color: "blue",
    direction: "vertical",
    style: { width: "200px" },
  },
}
