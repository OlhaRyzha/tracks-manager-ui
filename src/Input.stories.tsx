import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '.';


const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Type here…', type: 'text' },
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true, type: 'text' },
};
