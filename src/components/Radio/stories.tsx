import { Meta, Story } from '@storybook/react/types-6-0'

import Radio, { RadioProps } from '.'

export default {
  title: 'Input/Radio',
  component: Radio,
  args: {
    name: 'radio'
  },
  parameters: {
    backgrounds: { default: 'dark' }
  },
  argTypes: {
    onCheck: { action: 'onCheck' }
  }
} as Meta<RadioProps>

const Template: Story<RadioProps> = (args) => (
  <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '1rem' }}>
    <Radio {...args} labelFor="radio1" value="radio1" label="Label 1" />
    <Radio {...args} labelFor="radio2" value="radio2" label="Label 2" />
  </div>
)

export const Default = Template.bind({})
