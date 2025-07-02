import type { Meta, StoryObj } from "@storybook/react-vite"

import { Card } from "../components/card"

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: "This is a normal card",
  },
}

export const Elevated: Story = {
  args: {
    children: "This is a 4 elevated card",
    elevation: 4,
  },
}

export const BlueNormal: Story = {
  args: {
    children: "This is a normal blue card",
    color: "blue",
  },
}

export const BlueElevated: Story = {
  args: {
    children: "This is a 4 elevated blue card",
    elevation: 4,
    color: "blue",
  },
}
