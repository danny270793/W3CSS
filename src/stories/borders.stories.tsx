import type { Meta, StoryObj } from "@storybook/react-vite"

import { Panel } from "../components/panel"

const meta = {
  title: "Borders",
  component: Panel,
  tags: ["autodocs"],
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const Bordered: Story = {
  args: {
    children: <p>I have borders</p>,
    border: true,
  },
}

export const LeftBordered: Story = {
  args: {
    children: <p>I have only a left border.</p>,
    border: {
      left: true,
    },
  },
}

export const UpDownBordered: Story = {
  args: {
    children: <p>I have top and bottom borders.</p>,
    border: {
      top: true,
      bottom: true,
    },
  },
}

export const RedBordered: Story = {
  args: {
    children: <p>I have red borders.</p>,
    border: {
      top: true,
      bottom: true,
      right: true,
      left: true,
      color: "red",
    },
  },
}

export const LeftBlueBordered: Story = {
  args: {
    children: <p>I have a blue left border.</p>,
    border: {
      left: true,
      color: "blue",
    },
  },
}

export const UpDownGreenBordered: Story = {
  args: {
    children: <p>I have a green top and bottom border.</p>,
    border: {
      top: true,
      bottom: true,
      color: "green",
    },
  },
}

export const LeftRedBorderedPaleRed: Story = {
  args: {
    children: <p>I have a red left border and a pale-red background color.</p>,
    border: {
      left: true,
      color: "red",
    },
    color: "pale-red",
  },
}

export const NormalBordered: Story = {
  args: {
    children: <p>I have normal borders.</p>,
    border: true,
  },
}

export const SmallRoundedBordered: Story = {
  args: {
    children: <p>I have small rounded borders.</p>,
    border: true,
    round: "small",
  },
}

export const RoundedBordered: Story = {
  args: {
    children: <p>I have rounded borders.</p>,
    border: true,
    round: "normal",
  },
}

export const LargeRoundedBordered: Story = {
  args: {
    children: <p>I have large rounded borders.</p>,
    border: true,
    round: "large",
  },
}

export const XLargeRoundedBordered: Story = {
  args: {
    children: <p>I have xlarge rounded borders.</p>,
    border: true,
    round: "xlarge",
  },
}

export const XXLargeRoundedBordered: Story = {
  args: {
    children: <p>I have xxlarge rounded borders.</p>,
    border: true,
    round: "xxlarge",
  },
}

export const LeftThickBordered: Story = {
  args: {
    children: <p>I have a thick left border.</p>,
    thickBorder: {
      left: true,
    },
  },
}

export const LeftBlueThickBordered: Story = {
  args: {
    children: <p>I have a thick blue left border.</p>,
    thickBorder: {
      left: true,
      color: "blue",
    },
  },
}

export const LeftBlueThickBorderedPaleBlue: Story = {
  args: {
    children: (
      <p>I have a thick blue left border and a pale-blue background color.</p>
    ),
    thickBorder: {
      left: true,
      color: "blue",
    },
    color: "pale-blue",
  },
}

export const UpDownRedThickBorderedPaleRed: Story = {
  args: {
    children: (
      <p>
        I have a thick red top and bottom border and a pale-red background
        color.
      </p>
    ),
    thickBorder: {
      top: true,
      bottom: true,
      color: "red",
    },
    color: "pale-red",
  },
}
