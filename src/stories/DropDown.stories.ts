import { Meta, StoryObj } from "@storybook/react";
import DropDown from "../components/DropDown";
import ContextDecorator from "./decorator/ContextDecorator";

const meta = {
  title: "components/DropDown",
  component: DropDown,
  argTypes: {
    name: { control: "string" },
    tasks: { control: { type: "array", of: { type: "object" } } },
  },
  decorators: [ContextDecorator],
  parameters: {
    handleGroupListUpdate: () => {},
  },
} satisfies Meta<typeof DropDown>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    name: "today",
    tasks: [
      {
        description: "Wrote a small poem about the birthday",
        value: 23,
        checked: false,
      },
      {
        description: "We are here testing",
        value: 16,
        checked: false,
      },
    ],
  },
};

export const NoData: Story = {
    args: {
      name: "",
      tasks: [
      
      ],
    },
  };
