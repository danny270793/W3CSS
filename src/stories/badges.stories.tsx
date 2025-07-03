import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "../components/badge"

const meta = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: 9,
  },
}

export const Red: Story = {
  args: {
    children: 9,
    color: "red",
  },
}
