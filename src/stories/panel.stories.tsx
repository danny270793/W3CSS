import type { Meta, StoryObj } from "@storybook/react-vite"

import { Panel } from "../components/panel"

const meta = {
  title: "Panel",
  component: Panel,
  tags: ["autodocs"],
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const Red: Story = {
  args: {
    children: <p>I am a panel.</p>,
    color: "red",
  },
}

export const PaleGreen: Story = {
  args: {
    children: (
      <p>
        London is the most populous city in the United Kingdom, with a
        metropolitan area of over 9 million inhabitants.
      </p>
    ),
    color: "pale-green",
  },
}

export const Quote: Story = {
  args: {
    children: (
      <p>
        <i>"Make it as simple as possible, but not simpler."</i>
      </p>
    ),
    thickBorder: {
      left: true,
    },
    color: "sand",
    font: "serif",
    size: "xxlarge",
  },
}
