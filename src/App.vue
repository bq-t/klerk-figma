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

<style lang="scss">
.app {
  &__heading {
    @apply text-center font-medium
      text-[2rem] leading-[2.625rem] mt-2
      lg:text-[3.5rem] lg:leading-[4.5rem] lg:mt-6;
  }

  &__navbar {
    @apply px-7 mt-6;
  }
}
</style>
