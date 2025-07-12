import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: { className: 'h-4 w-full' },
};

export const Title: Story = {
  args: { className: 'h-8 w-1/2 mb-4' },
};

export const TextLines: Story = {
  render: () => (
    <>
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-5/6' />
      <Skeleton className='h-4 w-4/6' />
    </>
  ),
};

export const Avatar: Story = {
  args: { className: 'h-10 w-10 rounded-full' },
};
