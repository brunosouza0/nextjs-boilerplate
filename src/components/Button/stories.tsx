import { Meta, Story } from '@storybook/react/types-6-0'
import { FavoriteBorder } from '@styled-icons/material-outlined'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: { children: 'Button' },
  argTypes: {
    color: { control: { type: 'select', options: ['black', 'white'] } },
    icon: { control: { type: false } },
    bgColor: { control: { type: 'inline-radio', options: ['primary', 'secondary'] } },
    size: { control: { type: 'inline-radio', options: ['small', 'medium', 'large'] } },
    fullWidth: { control: { type: 'boolean' } },
    minimal: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
    iconPosition: { control: { type: 'inline-radio', options: ['left', 'right'] } }
  }
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const small = Template.bind({})
small.args = { size: 'small' }

export const medium = Template.bind({})
medium.args = { size: 'medium' }

export const large = Template.bind({})
large.args = { size: 'large' }

export const fullWidth = Template.bind({})
fullWidth.args = { fullWidth: true }

export const minimal = Template.bind({})
minimal.args = { minimal: true, bgColor: 'primary' }
minimal.parameters = { backgrounds: { default: 'dark' } }

export const asLink = Template.bind({})
asLink.args = { as: 'a' }

export const withIcon = Template.bind({})
withIcon.args = { icon: <FavoriteBorder />, size: 'large' }
