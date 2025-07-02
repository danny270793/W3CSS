import type { Meta, StoryObj } from "@storybook/react-vite"

import { Container } from "../components/container"
import { Opacity } from "./text.stories"

const meta = {
  title: "Animations",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const AnimateTop: Story = {
  args: {
    children: <p>Animation is Fun!</p>,
    animate: "top",
  },
}

export const AnimateBottom: Story = {
  args: {
    children: <p>Animation is Fun!</p>,
    animate: "bottom",
  },
}

export const AnimateLeft: Story = {
  args: {
    children: <p>Animation is Fun!</p>,
    animate: "left",
  },
}

export const AnimateRight: Story = {
  args: {
    children: <p>Animation is Fun!</p>,
    animate: "right",
  },
}

export const AnimateOpacity: Story = {
  args: {
    children: <p>Animation is Fun!</p>,
    animate: "opacity",
  },
}

export const AnimateZoom: Story = {
  args: {
    children: <p>Animation is Fun!</p>,
    animate: "zoom",
  },
}

export const AnimateFading: Story = {
  args: {
    children: <p>Animation is Fun!</p>,
    animate: "fading",
  },
}

export const AnimateSpin: Story = {
  args: {
    children: <p>Animation is Fun!</p>,
    animate: "spin",
  },
}
