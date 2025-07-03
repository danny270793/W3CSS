import type { Meta, StoryObj } from "@storybook/react-vite"

import { Modal } from "../components/modal"

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const NormalModal: Story = {
  args: {
    children: <p>This is a modal</p>,
  },
}

export const TopModal: Story = {
  args: {
    children: <p>This is a modal</p>,
    animate: "top",
  },
}
