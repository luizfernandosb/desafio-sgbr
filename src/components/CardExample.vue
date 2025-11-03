<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="p-card">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>