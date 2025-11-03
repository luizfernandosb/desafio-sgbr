<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SidebarMenu from '@/components/SidebarMenu.vue'
import { useThemeStore } from '@/stores/theme'
import DynamicDialog from 'primevue/dynamicdialog'
import ConfirmDialog from 'primevue/confirmdialog'

const route = useRoute()
const isMobile = ref(window.innerWidth <= 768)
const showSidebar = ref(true)
const themeStore = useThemeStore()

onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768
  })
  themeStore.initTheme()
})

watch(route, () => {
  if (isMobile.value && route.params.submenu) {
    showSidebar.value = false
  } else {
    showSidebar.value = true
  }
})
</script>

<template>
  <div class="flex h-screen">
    <SidebarMenu v-if="showSidebar || !isMobile" @toggle-sidebar="showSidebar = !showSidebar" />
    <div v-if="!isMobile || !showSidebar" class="flex-1 p-4 overflow-auto">
      <router-view />
    </div>
    <DynamicDialog />
    <ConfirmDialog />
  </div>
</template>