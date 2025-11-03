import type { Meta } from '@storybook/vue3'

import Perfil from './Perfil.vue'

const meta = {
  title: 'Settings/Perfil',
  component: Perfil,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { Perfil },
    setup() {
      return { args }
    },
    template: '<div class="max-w-xl"><Perfil /></div>'
  }),
  parameters: {
    layout: 'centered',
  },
  args: {},
} as Meta<typeof Perfil>

export default meta

export const Default = {
  args: {}
}

export const DarkMode = {
  parameters: {
    backgrounds: { default: 'dark' }
  }
}
