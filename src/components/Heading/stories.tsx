import { Story, Meta } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    backgrounds: { default: 'dark' }
  },
  args: {
    children: 'Title'
  }
} as Meta<HeadingProps>

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Default = Template.bind({})
