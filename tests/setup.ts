import { config } from '@vue/test-utils'
import { beforeAll } from 'vitest'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

// Mock PrimeVue components globally for all tests
config.global.plugins = [PrimeVue]
config.global.components = {
  Button,
  InputText
}

// Setup any other global test configuration
beforeAll(() => {
  // Mock window methods that might be needed
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})