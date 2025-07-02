import type { Meta, StoryObj } from "@storybook/react-vite"

import { Card } from "../components/card"
import { Container } from "../components/container"

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: <p>w3-card</p>,
  },
}

export const Yellow: Story = {
  args: {
    children: <p>w3-card</p>,
    color: "yellow",
  },
}

export const Complex: Story = {
  args: {
    children: (
      <>
        <Container type="header" color="blue">
          <h1>Header</h1>
        </Container>
        <Container>
          <p>Lorem ipsum...</p>
        </Container>
        <Container type="footer" color="blue">
          <h5>Footer</h5>
        </Container>
      </>
    ),
    elevation: 4,
  },
}
