import { Meta, StoryObj } from '@storybook/react';
import ListItem from '../components/ListItem';

// Your ListItem component stories
const meta = {
  title: 'components/ListItem',
  component: ListItem,
  argTypes: {
    description: { control: 'text' },
    selected: { control: 'boolean' },
    value: { control: 'number' },
    handleCheckboxClick: { action: 'handleCheckboxClick' },
  },
} satisfies Meta<typeof ListItem>; 

type Story = StoryObj<typeof meta>;
export default meta;

export const Default:Story = {
    args: {
        description: 'Task 1',
        selected: false,
        value: 23,
        handleCheckboxClick: () => {
          console.log('Checkbox clicked!');
    },
}
};

export const Selected:Story = {
    args: {
        description: 'Second task',
        selected: true,
        value: 15,
        handleCheckboxClick: () => {
          console.log('Checkbox clicked!');
    },
}
};
