import { Meta, Story } from '@storybook/react/types-6-0'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Input/TextField',
  component: TextField,
  args: {
    placeholder: 'E-mail',
    type: 'email'
  },
  parameters: { backgrounds: { default: 'dark' } }
} as Meta<TextFieldProps>

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />

export const Default: Story<TextFieldProps> = Template.bind({})

export const WithError: Story<TextFieldProps> = Template.bind({})
WithError.args = {
  label: 'E-mail',
  labelFor: 'textfield',
  labelColor: 'white',
  bgColor: 'darkGray',
  error: 'e-mail já cadastrado',
  initialValue: 'email@email.com'
}
