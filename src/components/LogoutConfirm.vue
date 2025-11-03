<template>
  <div class="p-4">
    <p class="mb-4">Tem certeza que deseja sair?</p>
    <div class="flex justify-end gap-2">
      <Button label="Cancelar" class="p-button-text" @click="onCancel" />
      <Button label="Confirmar" class="p-button-danger" @click="onConfirm" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
import Button from 'primevue/button'

const props = defineProps<{ dialog?: any, onConfirm?: () => void }>()
const attrs = useAttrs()

const close = () => {
  props.dialog?.close && props.dialog.close()
}

const onConfirm = () => {
  // try prop first, then any passed handler via attrs (some test runners pass handlers as attrs)
  const handler = props.onConfirm ?? (attrs as any).onConfirm
  if (typeof handler === 'function') {
    handler()
  }
  console.log('Logout confirmado!')
  close()
}

const onCancel = () => {
  close()
}
</script>
