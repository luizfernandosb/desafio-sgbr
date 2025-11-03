<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import InputSwitch from 'primevue/inputswitch'

const privacy = ref({
  privateProfile: true,
  showOnlineStatus: false,
  restrictedProfiles: false,
  hiddenWords: ['spam', 'fake'],
  hideLikes: true
})
</script>

<template>
  <Card class="mb-6">
    <template #title>Visibilidade do Perfil</template>
    <template #content>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span>Perfil Privado</span>
          <InputSwitch v-model="privacy.privateProfile" />
        </div>
        <div class="flex items-center justify-between">
          <span>Mostrar Status Online</span>
          <InputSwitch v-model="privacy.showOnlineStatus" />
        </div>
        <div class="flex items-center justify-between">
          <span>Ocultar Curtidas</span>
          <InputSwitch v-model="privacy.hideLikes" />
        </div>
      </div>
    </template>
  </Card>

  <Card>
    <template #title>Palavras Ocultas</template>
    <template #content>
      <div class="space-y-3">
        <input v-model="privacy.hiddenWords" class="w-full p-2 border rounded" placeholder="Adicione palavras..." />
        <div v-for="word in privacy.hiddenWords" :key="word" class="bg-blue-100 px-2 py-1 rounded text-sm">
          {{ word }} <button class="ml-2 text-red-500">×</button>
        </div>
      </div>
    </template>
  </Card>
</template>