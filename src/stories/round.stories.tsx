import type { Meta, StoryObj } from "@storybook/react-vite"

import { Panel } from "../components/panel"

const meta = {
  title: "Round",
  component: Panel,
  tags: ["autodocs"],
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const Round: Story = {
  args: {
    children: "w3-round",
    round: "normal",
    color: "teal",
  },
}

export const Circle: Story = {
  args: {
    children: <h1>The w3-circle Class</h1>,
    circle: true,
    color: "blue",
    padding: "large",
  },
}

export const CircleInside: Story = {
  args: {
    children: (
      <img
        src="https://www.w3schools.com/w3css/img_car.jpg"
        className="w3-circle"
        style={{ width: "75%" }}
      />
    ),
    circle: true,
    color: "green",
    padding: "large",
  },
}
