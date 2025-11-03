import type { Meta } from '@storybook/vue3'
import InputSwitchExample from './InputSwitchExample.vue'

const meta = {
  title: 'Components/InputSwitch',
  component: InputSwitchExample,
  tags: ['autodocs'],
  render: () => ({
    components: { InputSwitchExample },
    template: '<div class="p-4"><InputSwitchExample /></div>'
  }),
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof InputSwitchExample>

export default meta

export const Default = {
  args: {}
}

export const DarkMode = {
  parameters: {
    backgrounds: { default: 'dark' }
  }
}