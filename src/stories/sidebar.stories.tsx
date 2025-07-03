import type { Meta, StoryObj } from "@storybook/react-vite"

import { Sidebar } from "../components/sidebar"
import { List, ListItem } from "../components/list"
import { Container } from "../components/container"

const meta = {
  title: "Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: (
      <Container>
        <p>Main content</p>
      </Container>
    ),
    sidebar: (
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    ),
  },
}
