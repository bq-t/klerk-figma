<template>
  <layout-header />
  <main class="default-layout__main">
    <slot />
  </main>
  <layout-footer />
</template>

<script setup>
import LayoutHeader from '@/layouts/default/Header/Header'
import LayoutFooter from '@/layouts/default/Footer/Footer'
</script>

<style lang="scss">
.default-layout__main {
  @apply flex flex-col items-center;
}
</style>