import { Meta, StoryObj } from "@storybook/react";
import AppProgreesBar from "../components/AppProgressBar";

// Your ListItem component stories
const meta = {
  title: "components/AppProgreesBar",
  component: AppProgreesBar,
  argTypes: {
    value: { control: "number" },
  },
} satisfies Meta<typeof AppProgreesBar>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    value: 85,
  },
};

export const Selected: Story = {
  args: {
    value: 15,
  },
};

export const NoValue: Story = {
  args: {
    value: 0,
  },
};
