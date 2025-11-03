<script setup lang="ts">
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

const faqItems = ref([
  { title: 'Como criar uma conta?', content: 'Acesse o site e clique em Cadastro.' },
  { title: 'Esqueci minha senha', content: 'Use a opção Recuperar Senha.' },
  { title: 'Como denunciar?', content: 'Clique nos 3 pontos e selecione Denunciar.' }
])
</script>

<template>
  <Card class="card-theme">
    <template #title>FAQ - Perguntas Frequentes</template>
    <template #content>
      <Accordion :multiple="true">
        <AccordionTab v-for="(item, i) in faqItems" :key="i" :header="item.title">
          {{ item.content }}
        </AccordionTab>
      </Accordion>
    </template>
  </Card>
</template>