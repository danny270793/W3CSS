import type { Meta, StoryObj } from "@storybook/react-vite"

import { Element } from "../components/element"

const meta = {
  title: "Text",
  component: Element,
  tags: ["autodocs"],
} satisfies Meta<typeof Element>

export default meta
type Story = StoryObj<typeof meta>

export const Alignment: Story = {
  args: {
    children: (
      <>
        <Element textAlign="left">
          <p>Left aligned text.</p>
        </Element>
        <Element textAlign="right">
          <p>Right aligned text.</p>
        </Element>
      </>
    ),
    border: true,
    size: "large",
    className: "w3-container",
  },
}

export const Center: Story = {
  args: {
    children: (
      <>
        <h2>Centered Content</h2>
        <img
          src="https://www.w3schools.com/w3css/img_car.jpg"
          alt="car"
          style={{ width: "80%", maxWidth: "320px" }}
        />
        <p>Some centered text.</p>
      </>
    ),
    className: "w3-container",
    center: true,
  },
}

export const Wide: Story = {
  args: {
    children: "The w3-wide class specifies a wider text.",
    wide: true,
  },
}

export const Opacity: Story = {
  args: {
    children: <Element opaque>Text Opacity</Element>,
    className: "w3-panel",
    color: "pink",
  },
}
