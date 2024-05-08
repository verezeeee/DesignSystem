import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  story: {},
  args: {
    children: 'Button',
  },
} as Meta

export const Primary: StoryObj = {}

export const Big: StoryObj = {
  args: {
    size: 'big',
  },
}
