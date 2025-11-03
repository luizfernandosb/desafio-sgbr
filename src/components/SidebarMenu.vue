<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import Menu from 'primevue/menu'
import Button from 'primevue/button'
import { useThemeStore } from '@/stores/theme'

const router = useRouter()
const themeStore = useThemeStore()
// cache the current instance so PrimeVue services registered on the app are
// available when menu command handlers run (PrimeVue may call them outside
// of the component render context)
const inst = getCurrentInstance()

const items = ref([
  {
    label: 'Conta',
    icon: 'pi pi-user',
    command: () => router.push('/settings/conta')
  },
  {
    label: 'Perfil',
    icon: 'pi pi-id-card',
    command: () => router.push('/settings/perfil')
  },
  {
    label: 'Privacidade',
    icon: 'pi pi-shield',
    command: () => router.push('/settings/privacidade')
  },
  {
    label: 'Notificações',
    icon: 'pi pi-bell',
    command: () => router.push('/settings/notificacoes')
  },
  {
    label: 'Segurança',
    icon: 'pi pi-lock',
    command: () => router.push('/settings/seguranca')
  },
  {
    separator: true
  },
  {
    label: 'Ajuda',
    icon: 'pi pi-question-circle',
    items: [
      { label: 'FAQ', icon: 'pi pi-question', command: () => router.push('/settings/ajuda/faq') },
      { label: 'Contato', icon: 'pi pi-envelope', command: () => router.push('/settings/ajuda/contato') },
      { label: 'Sobre', icon: 'pi pi-info-circle', command: () => router.push('/settings/ajuda/sobre') }
    ]
  },
  {
    label: 'Tema',
    icon: 'pi pi-moon',
    command: () => router.push('/settings/tema')
  },
  {
    separator: true
  },
  {
    label: 'Sair',
    icon: 'pi pi-sign-out',
    command: () => openLogoutDialog()
  }
])

const openLogoutDialog = () => {
  // ConfirmationService exposes $confirm with the require() API
  const confirmService = inst?.appContext.config.globalProperties.$confirm
  if (confirmService && typeof confirmService.require === 'function') {
    confirmService.require({
      message: 'Tem certeza que deseja sair?',
      header: 'Confirmação de Logout',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        // real logout logic should go here
        console.log('Logout confirmado!')
        router.push('/')
      },
      reject: () => {
        // nothing to do on cancel
      }
    })
  } else {
    const ok = window.confirm('Tem certeza que deseja sair?')
    if (ok) {
      console.log('Logout confirmado!')
      router.push('/')
    }
  }
}
</script>

<template>
  <aside class="w-64 bg-surface-50 dark:bg-surface-800 h-full p-4 border-r">
    <div class="text-xl font-bold mb-6">Configurações</div>
    <Menu :model="items" class="w-full" />
    <Button 
      icon="pi pi-sun" 
      class="mt-4 w-full" 
      @click="themeStore.toggleTheme" 
      :label="themeStore.isDark ? 'Claro' : 'Escuro'"
    />
  </aside>
</template>