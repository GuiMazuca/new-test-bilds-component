import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta = {
  title: 'Ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { variant: 'default', children: 'button', size: 'default' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
}

export const Sm: Story = {
  args: {
    variant: 'default',
    children: 'Button',
    size: 'sm',
  },
}

export const Lg: Story = {
  args: {
    variant: 'default',
    children: 'Button',
    size: 'lg',
  },
}

export const Icon: Story = {
  args: {
    variant: 'default',
    children: '',
    size: 'icon',
  },
}

export const IsLoading: Story = {
  args: {
    variant: 'default',
    children: 'Button',
    size: 'default',
    isLoading: true,
  },
}
