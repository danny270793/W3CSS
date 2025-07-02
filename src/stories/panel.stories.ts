import type { Meta, StoryObj } from "@storybook/react-vite"

import { Panel } from "../components/panel"

const meta = {
  title: "Panel",
  component: Panel,
  tags: ["autodocs"],
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: "This is a normal panel",
  },
}

export const BlueNormal: Story = {
  args: {
    children: "This is a normal blue panel",
    color: "blue",
  },
}
