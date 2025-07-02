import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Display,
  DisplayBottomLeft,
  DisplayBottomMiddle,
  DisplayBottomRight,
  DisplayLeft,
  DisplayMiddle,
  DisplayRight,
  DisplayTopLeft,
  DisplayTopMiddle,
  DisplayTopRight,
} from "../components/display"
import { Element } from "../components/element"
import { Button } from "../components/button"

const meta = {
  title: "Display",
  component: Display,
  tags: ["autodocs"],
} satisfies Meta<typeof Display>

export default meta
type Story = StoryObj<typeof meta>

export const AllDisplays: Story = {
  args: {
    children: (
      <>
        <DisplayTopLeft>Top left</DisplayTopLeft>
        <DisplayTopMiddle>Top middle</DisplayTopMiddle>
        <DisplayTopRight>Top right</DisplayTopRight>

        <DisplayLeft>Left</DisplayLeft>
        <DisplayMiddle>Middle</DisplayMiddle>
        <DisplayRight>Right</DisplayRight>

        <DisplayBottomLeft>Bottom left</DisplayBottomLeft>
        <DisplayBottomMiddle>Bottom middle</DisplayBottomMiddle>
        <DisplayBottomRight>Bottom right</DisplayBottomRight>
      </>
    ),
    style: { height: "100px" },
    color: "green",
  },
}

export const FullMargin: Story = {
  args: {
    children: (
      <>
        <DisplayTopLeft hover="display">Top left</DisplayTopLeft>
        <DisplayTopMiddle hover="display">Top middle</DisplayTopMiddle>
        <DisplayTopRight hover="display">Top right</DisplayTopRight>

        <DisplayLeft hover="display">Left</DisplayLeft>
        <DisplayMiddle>Middle</DisplayMiddle>
        <DisplayRight hover="display">Right</DisplayRight>

        <DisplayBottomLeft hover="display">Bottom left</DisplayBottomLeft>
        <DisplayBottomMiddle hover="display">Bottom middle</DisplayBottomMiddle>
        <DisplayBottomRight hover="display">Bottom right</DisplayBottomRight>
      </>
    ),
    style: { height: "100px" },
    color: "green",
  },
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const meta2 = {
  title: "Display",
  component: Element,
  tags: ["autodocs"],
} satisfies Meta<typeof Element>

type Story2 = StoryObj<typeof meta2>

export const Conatiner: Story2 = {
  args: {
    children: (
      <>
        <h1>
          The <strong>w3-display-hover</strong> Class
        </h1>
        <Display hover="opacity" style={{ width: "350px" }}>
          <img
            src="https://www.w3schools.com/w3css/img_avatar3.png"
            alt="Avatar"
            width="100%"
          ></img>
          <DisplayMiddle hover="display" size="xxlarge">
            <Button color="black">John Doe</Button>
          </DisplayMiddle>
        </Display>
      </>
    ),
  },
}

export const Floating: Story = {
  args: {
    children: (
      <>
        <Element float="left" color="red" padding="normal">
          Left
        </Element>
        <Element float="right" color="blue" padding="normal">
          Right
        </Element>
      </>
    ),
    className: "w3-bar",
    color: "light-gray",
  },
}
