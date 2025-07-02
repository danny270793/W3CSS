import type { Meta, StoryObj } from "@storybook/react-vite"

import { Container } from "../components/container"

const meta = {
  title: "Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: <p>The w3-container class is an important w3.CSS class.</p>,
  },
}

export const Red: Story = {
  args: {
    children: <p>London is the capital city of England.</p>,
    color: "red",
  },
}

export const Header: Story = {
  args: {
    children: <h1>Header</h1>,
    color: "teal",
  },
}

export const Footer: Story = {
  args: {
    children: (
      <>
        <h5>Footer</h5>
        <p>Footer information goes here</p>
      </>
    ),
    color: "teal",
  },
}
