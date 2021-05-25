import { Story, Meta } from '@storybook/react/types-6-0'

import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    title: 'Click here',
    children: 'Content'
  },
  parameters: { backgrounds: { default: 'dark' } }
} as Meta<DropdownProps>

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
