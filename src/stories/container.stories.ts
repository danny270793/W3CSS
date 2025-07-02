import type { Meta, StoryObj } from "@storybook/react-vite"

import { Container } from "../components/container"

const meta = {
  title: "Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: "This is a normal container",
  },
}

export const BlueNormal: Story = {
  args: {
    children: "This is a normal blue container",
    color: "blue",
  },
}

export const WithBorders: Story = {
  args: {
    children: "This is a bordered blue container",
    border: true,
  },
}

export const WithSomeBorders: Story = {
  args: {
    children: "This is a bordered blue container",
    border: {
      left: true,
      right: true,
    },
  },
}

export const WithSomeHoverableBorders: Story = {
  args: {
    children: "This is a red bordered with pale red container",
    border: {
      left: true,
      right: true,
      hover: "blue",
      color: "red",
    },
    color: "pale-red",
  },
}
