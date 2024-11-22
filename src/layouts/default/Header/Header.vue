<template>
  <header class="default-layout-header">
    <a href="#">
      <header-logotype />
    </a>
    <header-breadcrumbs
      class="default-layout-header__breadcrumbs"
      :items="availableBreadcrumbs"
    />
  </header>
</template>

<script setup>
import HeaderLogotype from '@/assets/img/logotype.svg'
import HeaderBreadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'

// No needs reactivity
const availableBreadcrumbs = [
  {
    label: 'Хлебные крошки',
    // Vue router param, no needed for test task
    //to: { name: 'index' },
  },
  {
    label: 'Хлебные крошки',
    //to: { name: 'index' },
  },
  {
    label: 'Хлебные крошки',
    //to: { name: 'index' },
  },
]
</script>

<style lang="scss">
.default-layout-header {
  @apply flex flex-col items-center
    pt-6 lg:pt-12;

  &__breadcrumbs {
    @apply lg:mt-6;
  }
}
</style>