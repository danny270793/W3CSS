import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tag } from "../components/tag"

const meta = {
  title: "Tag",
  component: Tag,
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: "New!",
    color: "blue",
  },
}

export const Jumbo: Story = {
  args: {
    children: "New!",
    size: "jumbo",
    color: "blue",
  },
}
