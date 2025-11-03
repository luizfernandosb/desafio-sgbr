<template>
  <div class="card flex justify-content-center">
    <InputSwitch v-model="checked" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputSwitch from 'primevue/inputswitch'

const checked = ref(false)
</script>