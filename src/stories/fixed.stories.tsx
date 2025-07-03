import type { Meta, StoryObj } from "@storybook/react-vite"

import { Container } from "../components/container"

const meta = {
  title: "Fixed",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {
  args: {
    children: (
      <>
        <Container fixed="top">TOP</Container>
      </>
    ),
  },
}

export const Bottom: Story = {
  args: {
    children: (
      <>
        <Container fixed="bottom">BOTTOM</Container>
      </>
    ),
  },
}

export const Both: Story = {
  args: {
    children: (
      <>
        <Container fixed="top">TOP</Container>
        <Container fixed="bottom">BOTTOM</Container>
      </>
    ),
  },
}
