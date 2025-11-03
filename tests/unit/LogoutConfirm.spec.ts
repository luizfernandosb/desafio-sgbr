import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import LogoutConfirm from '../../src/components/LogoutConfirm.vue'

describe('LogoutConfirm', () => {
  it('calls dialog.close on cancel and onConfirm prop on confirm', async () => {
    const closeMock = vi.fn()
    const onConfirmMock = vi.fn()

    const wrapper = mount(LogoutConfirm, {
      props: {
        dialog: { close: closeMock },
        onConfirm: onConfirmMock
      },
      global: {
        plugins: [
          {
            install(app) {
              app.config.globalProperties.$dialog = { close: closeMock }
            }
          }
        ]
      }

    })

    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThanOrEqual(2)

    await buttons[0].trigger('click')
    expect(closeMock).toHaveBeenCalled()

    await buttons[1].trigger('click')
    expect(onConfirmMock).toHaveBeenCalled()
    expect(closeMock).toHaveBeenCalledTimes(2)
  })
})
