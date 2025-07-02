import type { Meta, StoryObj } from "@storybook/react-vite"

import { List, ListItem } from "../components/list"

const meta = {
  title: "List",
  component: List,
  tags: ["autodocs"],
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: (
      <>
        <li>Jill</li>
        <li>Eve</li>
        <li>Adam</li>
      </>
    ),
  },
}

export const Bordered: Story = {
  args: {
    children: (
      <>
        <li>Jill</li>
        <li>Eve</li>
        <li>Adam</li>
      </>
    ),
    border: true,
  },
}

export const Centered: Story = {
  args: {
    children: (
      <>
        <ListItem>Jill</ListItem>
        <ListItem>Eve</ListItem>
        <ListItem>Adam</ListItem>
      </>
    ),
    center: true,
  },
}

export const Hoverable: Story = {
  args: {
    children: (
      <>
        <ListItem className="w3-hover-light-gray">Jill</ListItem>
        <ListItem className="w3-hover-light-gray">Eve</ListItem>
        <ListItem className="w3-hover-light-gray">Adam</ListItem>
      </>
    ),
  },
}

export const Beauty: Story = {
  args: {
    children: (
      <>
        <ListItem className="w3-bar">
          <img
            src="https://www.w3schools.com/w3css/img_avatar2.png"
            className="w3-bar-item w3-circle w3-hide-small"
            style={{ width: "85px" }}
          />
          <div className="w3-bar-item">
            <span className="w3-large">Jill</span>
            <br />
            <span>Support</span>
          </div>
        </ListItem>
        <ListItem className="w3-bar">
          <img
            src="https://www.w3schools.com/w3css/img_avatar2.png"
            className="w3-bar-item w3-circle w3-hide-small"
            style={{ width: "85px" }}
          />
          <div className="w3-bar-item">
            <span className="w3-large">Jill</span>
            <br />
            <span>Support</span>
          </div>
        </ListItem>
      </>
    ),
    className: "w3-card-4",
  },
}
