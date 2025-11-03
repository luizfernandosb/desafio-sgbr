<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import InputSwitch from 'primevue/inputswitch'
import Button from 'primevue/button'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const themeOptions = ref([
  { label: 'Automático', value: 'auto' },
  { label: 'Claro', value: 'light' },
  { label: 'Escuro', value: 'dark' }
])
</script>

<template>
  <Card class="mb-6">
    <template #title>Modo do Tema</template>
    <template #content>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span>Tema Escuro</span>
          <InputSwitch :modelValue="themeStore.isDark" @update:modelValue="val => themeStore.setTheme(val ? 'dark' : 'light')" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Modo Preferido</label>
          <select class="w-full p-2 border rounded">
            <option v-for="option in themeOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </template>
  </Card>

  <Card>
    <template #title>Ações Rápidas</template>
    <template #content>
      <div class="space-y-2">
        <Button label="Alternar Tema" @click="themeStore.toggleTheme" class="w-full" />
        <Button label="Redefinir Padrão" class="w-full p-button-outlined" />
      </div>
    </template>
  </Card>
</template>