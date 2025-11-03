import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import MultiSelect from 'primevue/multiselect'
import Knob from 'primevue/knob'
import Divider from 'primevue/divider'
import DynamicDialog from 'primevue/dynamicdialog'
import DialogService from 'primevue/dialogservice'

import 'primeicons/primeicons.css'
import '../src/style.css'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    }
  }
})

setup((app) => {
  app.use(PrimeVue, {
    theme: {
      preset: MyPreset,
      options: {
        darkModeSelector: '.dark',
      }
    }
  })
  app.use(DialogService)

  app.component('Button', Button)
  app.component('Menu', Menu)
  app.component('Card', Card)
  app.component('Panel', Panel)
  app.component('InputSwitch', InputSwitch)
  app.component('InputText', InputText)
  app.component('Dropdown', Dropdown)
  app.component('MultiSelect', MultiSelect)
  app.component('Knob', Knob)
  app.component('Divider', Divider)
  app.component('DynamicDialog', DynamicDialog)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1e293b' },
      ],
    },
  },
  decorators: [
    (story, context) => ({
      components: { story },
      template: `
        <div :class="{'dark': isDark}" class="p-4">
          <story />
          <DynamicDialog />
        </div>
      `,
      setup() {
        const isDark = context.globals.backgrounds?.value === '#1e293b'
        return { isDark }
      },
    }),
  ],
}

export default preview