<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const user = ref({
  name: 'Luiz Silva',
  email: 'luiz@example.com',
  phone: '+55 (49) 99838-1023'
})

const updateProfile = () => {
  console.log('Perfil atualizado:', user.value)
}
</script>

<template>
  <Card class="mb-6 card-theme">
    <template #title>Informações da Conta</template>
    <template #content>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">Nome</label>
          <InputText v-model="user.name" class="w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Email</label>
          <InputText v-model="user.email" class="w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Telefone</label>
          <InputText v-model="user.phone" class="w-full" />
        </div>
        <Button label="Atualizar Perfil" @click="updateProfile" class="mt-4" />
      </div>
    </template>
  </Card>

  <Card class="card-theme">
    <template #title>Segurança</template>
    <template #content>
      <div class="space-y-3">
        <Button label="Alterar Senha" class="p-button-outlined w-full" />
        <Button label="Ativar 2FA" class="p-button-outlined w-full" />
        <Button label="Gerenciar Sessões" class="p-button-outlined w-full" />
      </div>
    </template>
  </Card>
</template>