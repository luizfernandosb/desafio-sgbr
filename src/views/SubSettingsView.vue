<script setup lang="ts">
import { computed, watch, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from 'primevue/button'
import { useUserQuery } from '../composables/useUserQuery'
import Conta from '../components/settings/Conta.vue'
import Privacidade from '../components/settings/Privacidade.vue'
import Notificacoes from '../components/settings/Notificacoes.vue'
import Tema from '../components/settings/Tema.vue'
import FAQ from '../components/settings/ajuda/FAQ.vue'
import Contato from '../components/settings/ajuda/Contato.vue'
import Sobre from '../components/settings/ajuda/Sobre.vue'
import Perfil from '../components/settings/Perfil.vue'
import Seguranca from '../components/settings/Seguranca.vue'

const route = useRoute()
const router = useRouter()

const submenu = computed(() => (route.params.submenu as string) || '')
const subitem = computed(() => (route.params.subitem as string) || '')
const { isLoading } = useUserQuery()

const isMobile = ref(window.innerWidth <= 768)
const onResize = () => { isMobile.value = window.innerWidth <= 768 }
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))

const NotFound = { template: '<div class="p-4">Opção não encontrada.</div>' }

const CurrentComponent = computed(() => {
  switch (submenu.value) {
    case 'conta':
      return Conta
    case 'perfil':
      return Perfil
    case 'privacidade':
      return Privacidade
    case 'notificacoes':
      return Notificacoes
    case 'seguranca':
      return Seguranca
    case 'tema':
      return Tema
    case 'ajuda':
      switch (subitem.value) {
        case 'faq':
          return FAQ
        case 'contato':
          return Contato
        case 'sobre':
          return Sobre
        default:
          return { template: '<div class="p-4">Selecione uma opção de ajuda</div>' }
      }
    default:
      return NotFound
  }
})

const goBack = () => router.push('/settings')

watch(route, () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">
    <Button 
      v-if="isMobile" 
      icon="pi pi-arrow-left" 
      class="mb-4 p-button-text text-surface-700 dark:text-surface-50" 
      @click="goBack"
      label="Voltar"
    />

    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-3xl font-bold capitalize">{{ submenu }}<span v-if="subitem">/{{ subitem }}</span></h1>
        <p class="text-surface-500">Gerencie suas {{ submenu }} {{ subitem ? (' - ' + subitem) : '' }}</p>
      </div>
      <Button 
        v-if="submenu === 'conta'" 
        label="Salvar Alterações" 
        class="p-button-success"
      />
    </div>

    <div v-if="isLoading" class="text-center py-8">
      Carregando configurações...
    </div>

    <div v-else>
      <component :is="CurrentComponent" />
    </div>
  </div>
</template>