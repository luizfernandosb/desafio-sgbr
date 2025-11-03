import type { Meta, StoryObj } from '@storybook/vue3'
import SidebarMenu from './SidebarMenu.vue'

const meta = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SidebarMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
