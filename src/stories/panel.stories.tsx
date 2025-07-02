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

export const Alert: Story = {
  args: {
    children: (
      <>
        <h3>Danger!</h3>
        <p>Red often indicates a dangerous or negative situation.</p>
      </>
    ),
    color: "red",
  },
}

export const AsCard: Story = {
  args: {
    children: (
      <p>
        London is the most populous city in the United Kingdom, with a
        metropolitan area of over 9 million inhabitants.
      </p>
    ),
    color: "blue",
    className: "w3-card-4",
  },
}

export const Rounded: Story = {
  args: {
    children: (
      <p>
        London is the most populous city in the United Kingdom, with a
        metropolitan area of over 9 million inhabitants.
      </p>
    ),
    color: "blue",
    round: "xlarge",
  },
}
