import type { Meta, StoryObj } from '@storybook/react-vite';
import { Shuffle, SkipBack, SkipForward } from 'lucide-react';
import { Button, ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
        'paginationInactive',
      ],
    },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
  },
};
export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: { children: 'Save', variant: 'default', size: 'default' },
};
export const Destructive: Story = {
  args: { children: 'Delete', variant: 'destructive', size: 'default' },
};
export const Ghost: Story = {
  args: { children: 'Cancel', variant: 'ghost', size: 'default' },
};
export const IconPrev: Story = {
  args: { children: <SkipBack size={20} />, variant: 'outline', size: 'icon' },
};
export const IconShuffle: Story = {
  args: { children: <Shuffle size={20} />, variant: 'outline', size: 'icon' },
};
export const IconNext: Story = {
  args: {
    children: <SkipForward size={20} />,
    variant: 'outline',
    size: 'icon',
  },
};

export const PaginationInactive: Story = {
  args: {
    children: 'Page 2',
    variant: 'paginationInactive',
    size: 'default',
  },
};
