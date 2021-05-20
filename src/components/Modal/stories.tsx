import { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Modal, { ModalProps } from '.'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: { type: false } },
    setIsOpen: { control: { type: false } }
  }
} as Meta<ModalProps>

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export const Default = Template.bind({})
