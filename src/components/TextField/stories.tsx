import { Meta, Story } from '@storybook/react/types-6-0'
import { Password } from '@styled-icons/material-outlined'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Input/TextField',
  component: TextField,
  args: {
    label: 'Label',
    labelColor: 'white'
  },
  parameters: {
    backgrounds: { default: 'dark' }
  },
  argTypes: {
    icon: { control: { type: false } }
  }
} as Meta<TextFieldProps>

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />

export const Default = Template.bind({})

export const withIcon = Template.bind({})
withIcon.args = { icon: <Password />, type: 'password', label: 'Password' }
