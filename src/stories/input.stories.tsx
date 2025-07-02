import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "../components/input"

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
}

export const Border: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    border: true,
  },
}
