import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)


  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme === 'dark'
    document.documentElement.classList.remove('dark')
    if (isDark.value) document.documentElement.classList.add('dark')
  }

  const setTheme = (mode: 'light' | 'dark') => {
    isDark.value = mode === 'dark'
    localStorage.setItem('theme', mode)
    document.documentElement.classList.remove('dark')
    if (isDark.value) document.documentElement.classList.add('dark')
  }

  const toggleTheme = () => {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return { isDark, initTheme, setTheme, toggleTheme }
})