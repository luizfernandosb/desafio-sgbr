# Desafio SGBR — Aplicativo de Configurações (Exemplo)

Este repositório é um projeto exemplo Vue 3 (Vite) que implementa uma área de "Configurações" com um menu lateral, subviews, suporte a tema escuro/claro e um modal de confirmação de logout usando PrimeVue.

O objetivo aqui é fornecer uma base prática para um painel de configurações com comportamento mobile específico, Storybook para componentes e testes unitários com Vitest.

---

## Principais recursos

- Menu lateral com opções e sub-opções (Conta, Perfil, Privacidade, Notificações, Segurança, Ajuda → FAQ/Contato/Sobre, Tema, Sair).
- Comportamento MOBILE:
  - Ao acessar `/settings` em telas pequenas, exibe apenas o menu lateral.
  - Ao clicar em um item, navega para `/settings/:submenu` (ou `/settings/ajuda/faq`) e exibe apenas o conteúdo/submenu.
  - Botão de voltar visível no topo do `SubSettingsView` em mobile para retornar ao menu.
- Tema claro/escuro com persistência usando `localStorage` (via store `useThemeStore`).
- Modal de confirmação de logout implementado com PrimeVue `ConfirmDialog` (via `ConfirmationService`).
- Storybook configurado para visualizar componentes isolados.
- Testes unitários com Vitest + @vue/test-utils (ex.: `Perfil`, `LogoutConfirm`).

---

## Pré-requisitos

- Node.js (>= 18 recomendado)
- npm (ou pnpm/yarn — ajustes podem ser necessários)

---

## Instalação

1. Clone o repositório e entre na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

---

## Scripts úteis (no `package.json`)

- `npm run dev` — inicia o servidor de desenvolvimento (Vite).
- `npm run build` — roda `vue-tsc` e constrói a aplicação com Vite.
- `npm run preview` — executa o preview da build localmente.
- `npm run storybook` — inicia o Storybook (porta 6006 por padrão).
- `npm run build-storybook` — gera a build do Storybook.
- `npm run test` — executa os testes com Vitest.
- `npm run test:ui` — executa Vitest em modo UI.
- `npm run test:coverage` — executa testes e gera cobertura.

---

## Como funciona (visão rápida)

- O ponto de entrada é `src/main.ts`. Nele o app registra PrimeVue, `ConfirmationService` (necessário para `ConfirmDialog`), `DialogService` (para `DynamicDialog`), Pinia e Vue Query.
- `App.vue` monta `<DynamicDialog />` e `<ConfirmDialog />` globalmente para que os serviços consigam abrir modais dinamicamente.
- `src/components/SidebarMenu.vue` contém a definição do menu. O item "Sair" usa `ConfirmationService` (`$confirm.require({...})`) para abrir o `ConfirmDialog` do PrimeVue. Se o serviço não estiver disponível, há fallback para `window.confirm`.
- `src/views/SubSettingsView.vue` detecta `isMobile` (largura ≤ 768px) e mostra um botão de voltar visível em mobile para retornar ao menu.

---

## Testes (Vitest)

- Configuração principal em `vitest.config.ts` (usa `jsdom` como ambiente).
- Arquivo de setup `tests/setup.ts` registra PrimeVue globalmente nos testes e mocks necessários (ex.: `ResizeObserver`).
- Exemplos de testes estão em `tests/unit/`.

Executar testes:

```bash
npm run test
```

Se houver problemas com o ambiente, verifique se as dependências de desenvolvimento (`vitest`, `@vue/test-utils`, `jsdom`, `@vitejs/plugin-vue`) estão instaladas.

---

## Storybook

O Storybook foi configurado em `.storybook/` e registra PrimeVue no `preview.ts`. Algumas dicas se ocorrerem erros:

- Se aparecer erro relacionado a `actions.argTypesRegex`, remova o uso global e use `fn()` de `@storybook/test` em stories específicas (isso já foi ajustado).
- Se surgir erro sobre otimização de dependências (Vite optimize), adicione pacotes problemáticos em `optimizeDeps.exclude` no `.storybook/main.ts` (isto já contém exclusões para PrimeVue em alguns casos).
- Limpe o cache do Storybook caso veja erros ligados a arquivos ausentes:

```bash
rm -rf node_modules/.cache/storybook
npm run storybook
```

---

# File Tree: desafio-sgbr
```
├── 📁 .storybook
│   ├── 📄 main.ts
│   └── 📄 preview.ts
├── 📁 src
│   ├── 📁 components
│   │   ├── 📁 settings
│   │   │   ├── 📁 ajuda
│   │   │   │   ├── 📄 Contato.stories.ts
│   │   │   │   ├── 📄 Contato.vue
│   │   │   │   ├── 📄 FAQ.vue
│   │   │   │   ├── 📄 Sobre.stories.ts
│   │   │   │   └── 📄 Sobre.vue
│   │   │   ├── 📄 Conta.vue
│   │   │   ├── 📄 Notificacoes.stories.ts
│   │   │   ├── 📄 Notificacoes.vue
│   │   │   ├── 📄 Perfil.stories.ts
│   │   │   ├── 📄 Perfil.vue
│   │   │   ├── 📄 Privacidade.vue
│   │   │   ├── 📄 Seguranca.stories.ts
│   │   │   ├── 📄 Seguranca.vue
│   │   │   └── 📄 Tema.vue
│   │   ├── 📄 CardExample.stories.ts
│   │   ├── 📄 CardExample.vue
│   │   ├── 📄 InputSwitchExample.stories.ts
│   │   ├── 📄 InputSwitchExample.vue
│   │   ├── 📄 LogoutConfirm.vue
│   │   ├── 📄 SidebarMenu.stories.ts
│   │   └── 📄 SidebarMenu.vue
│   ├── 📁 composables
│   │   └── 📄 useUserQuery.ts
│   ├── 📁 router
│   │   └── 📄 index.ts
│   ├── 📁 stores
│   │   └── 📄 theme.ts
│   ├── 📁 views
│   │   ├── 📄 SettingsView.vue
│   │   └── 📄 SubSettingsView.vue
│   ├── 📄 App.vue
│   ├── 📄 main.ts
│   └── 🎨 style.css
├── 📁 tests
│   ├── 📁 unit
│   │   ├── 📄 LogoutConfirm.spec.ts
│   │   └── 📄 Perfil.spec.ts
│   └── 📄 setup.ts
├── 📝 README.md
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.js
├── 📄 tailwind.config.js
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.node.json
├── 📄 vite.config.ts
└── 📄 vitest.config.ts
```