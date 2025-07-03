import type { Meta, StoryObj } from "@storybook/react-vite"

import { Container } from "../components/container"

const meta = {
  title: "Margin",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const FullMargin: Story = {
  args: {
    children: (
      <Container margin color="red">
        <p>I have 16px margin on all sides.</p>
      </Container>
    ),
    color: "blue",
  },
}

export const TopMargin: Story = {
  args: {
    children: (
      <Container margin={{ top: true }} color="red">
        <p>I have 16px margin on the top.</p>
      </Container>
    ),
    color: "blue",
  },
}

export const Section: Story = {
  args: {
    children: (
      <>
        <Container section color="red">
          <p>I have a section margin.</p>
        </Container>
        <Container section color="green">
          <p>I have a section margin.</p>
        </Container>
      </>
    ),
    color: "blue",
  },
}
