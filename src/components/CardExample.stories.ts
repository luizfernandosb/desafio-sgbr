import type { Meta, StoryObj } from '@storybook/vue3'
import CardExample from './CardExample.vue'

const meta = {
  title: 'Components/CardExample',
  component: CardExample,
  args: { title: 'Título' },
} satisfies Meta<typeof CardExample>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithContent: Story = {
  render: (args) => ({
    components: { CardExample },
    setup() { return { args } },
    template: '<CardExample v-bind="args">Conteúdo aqui</CardExample>'
  })
}