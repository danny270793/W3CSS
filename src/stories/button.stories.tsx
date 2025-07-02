import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "../components/button"

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: "Black",
    color: "black",
  },
}

export const Hoverable: Story = {
  args: {
    children: "Black",
    color: "black",
    hoverColor: "red",
  },
}

export const Roundable: Story = {
  args: {
    children: "Black",
    color: "black",
    round: "xlarge",
  },
}

export const Big: Story = {
  args: {
    children: "Black",
    color: "black",
    size: "xlarge",
  },
}

export const Bordered: Story = {
  args: {
    children: "Black",
    color: "yellow",
    size: "xlarge",
    border: {
      top: true,
      bottom: true,
      left: true,
      right: true,
      color: "black",
      hover: "red",
    },
  },
}

export const Block: Story = {
  args: {
    children: "Login",
    color: "blue",
    block: true,
  },
}

export const Disbaled: Story = {
  args: {
    children: "Login",
    color: "blue",
    block: true,
    disabled: true,
  },
}

export const TextAligned: Story = {
  args: {
    children: "Login",
    color: "blue",
    block: true,
    textAlign: "right",
  },
}

export const Padding: Story = {
  args: {
    children: "Login",
    color: "blue",
    block: true,
    padding: "large",
  },
}

export const Ripple: Story = {
  args: {
    children: "Login",
    color: "blue",
    block: true,
    ripple: true,
  },
}
