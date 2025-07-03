import type { Meta, StoryObj } from "@storybook/react-vite"

import { Radio } from "../components/radio"

const meta = {
  title: "Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    label: "Accept Terms and Conditions",
    selected: "option1",
    value: "option2",
    onChange: (value: string) => window.alert("selected: " + value),
  },
}

export const Checked: Story = {
  args: {
    label: "Accept Terms and Conditions",
    selected: "option2",
    value: "option2",
    onChange: (value: string) => window.alert("selected: " + value),
  },
}

export const Disabled: Story = {
  args: {
    label: "Accept Terms and Conditions",
    selected: "option1",
    value: "option2",
    disabled: true,
    onChange: (value: string) => window.alert("selected: " + value),
  },
}
