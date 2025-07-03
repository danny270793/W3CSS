import type { Meta, StoryObj } from "@storybook/react-vite"

import { Dropdown } from "../components/dropdown"

const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: (
      <>
        <a href="#" className="w3-bar-item w3-button">
          Link 1
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 2
        </a>
      </>
    ),
    label: "Hover me",
  },
}
