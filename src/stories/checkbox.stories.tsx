import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "../components/checkbox"

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: false,
    onChange: () => window.alert("checked"),
  },
}

export const CheckedNormal: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: true,
    onChange: () => window.alert("unchecked"),
  },
}

export const DisabledNormal: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: true,
    disabled: true,
    onChange: () => window.alert("unchecked"),
  },
}
