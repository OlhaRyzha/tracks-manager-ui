import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    className: 'h-16 w-16',
  },
};

export const Small: Story = {
  args: {
    className: 'h-8 w-8',
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: 'h-12 w-12 rounded-lg border-2 border-gray-300',
  },
}; 