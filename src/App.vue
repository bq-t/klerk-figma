<template>
  <default-layout>
    <h1 class="app__heading">
      Подписки &laquo;Клерка&raquo;
    </h1>
    <app-navbar
      class="app__navbar"
      :items="navbarRoutes"
    />
    <subscriptions-tab />
  </default-layout>
</template>

<script setup>
import DefaultLayout from '@/layouts/default'
import AppNavbar from '@/components/Navbar/Navbar'
import SubscriptionsTab from '@/components/SubscriptionsTab/SubscriptionsTab'

// No needs reactivity
const navbarRoutes = [
  {
    label: 'Рассылки',
    to: { name: 'index' },
  },
  {
    label: 'Соцсети',
    to: { name: 'index' },
  },
  {
    label: 'Мессенджеры',
    to: { name: 'index' },
  },
]
</script>

<style lang="scss" scoped>
.app {
  &__heading {
    @apply text-[3.5rem] leading-[4.5rem] text-center font-medium
      mt-6;
  }

  &__navbar {
    @apply px-7 mt-6;
  }
}
</style>
