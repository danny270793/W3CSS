import type { Meta, StoryObj } from "@storybook/react-vite"

import { Panel } from "../components/panel"

const meta = {
  title: "Padding",
  component: Panel,
  tags: ["autodocs"],
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const Padding16: Story = {
  args: {
    children: <p>I have 16px top and bottom padding.</p>,
    color: "orange",
    padding: "16",
  },
}

export const Padding24: Story = {
  args: {
    children: <p>I have 24px top and bottom padding.</p>,
    color: "orange",
    padding: "24",
  },
}

export const PaddingSmall: Story = {
  args: {
    children: (
      <p>I have 4px top and bottom padding and 8px left and right padding.</p>
    ),
    color: "blue",
    padding: "small",
  },
}

export const PaddingLarge: Story = {
  args: {
    children: (
      <p>I have 12px top and bottom padding and 24px left and right padding.</p>
    ),
    color: "blue",
    padding: "large",
  },
}
