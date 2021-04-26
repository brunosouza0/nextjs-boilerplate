import { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'check' }
  },
  args: {
    label: 'Label',
    labelFor: 'checkbox',
    isCheck: true
  },
  parameters: { backgrounds: { default: 'dark' } }
} as Meta<CheckboxProps>

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

export const Toggle = Template.bind({})
Toggle.args = { toggle: true, isCheck: false }
