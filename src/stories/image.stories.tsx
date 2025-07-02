import type { Meta, StoryObj } from "@storybook/react-vite"

import { Image } from "../components/image"

const meta = {
  title: "Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Circle: Story = {
  args: {
    circle: true,
    src: "https://www.w3schools.com/w3css/img_snowtops.jpg",
    alt: "Snowy Mountains",
  },
}

export const Bordered: Story = {
  args: {
    border: true,
    padding: "normal",
    src: "https://www.w3schools.com/w3css/img_snowtops.jpg",
    alt: "Snowy Mountains",
  },
}
