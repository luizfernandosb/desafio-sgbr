import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Perfil from '../../src/components/settings/Perfil.vue'

describe('Perfil', () => {
  it('renders form fields', () => {
    const wrapper = mount(Perfil, {
      global: {
        stubs: {
          InputText: {
            template: '<input type="text" />'
          }
        }
      }
    })

    expect(wrapper.text()).toContain('Perfil')
    expect(wrapper.text()).toContain('Edite suas informações')
    
    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBeGreaterThanOrEqual(2)
  })
})
