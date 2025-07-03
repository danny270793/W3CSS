import type { Meta, StoryObj } from "@storybook/react-vite"

import { Paginator } from "../components/paginator"

const meta = {
  title: "Paginator",
  component: Paginator,
  tags: ["autodocs"],
} satisfies Meta<typeof Paginator>

export default meta
type Story = StoryObj<typeof meta>

export const AnimateTop: Story = {
  args: {
    currentPage: 3,
    totalPages: 5,
  },
}
