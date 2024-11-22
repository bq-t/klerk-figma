<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <navbar-item
        v-for="(navbarItem, navbarItemIndex) in items"
        v-bind="navbarItem"
        :key="navbarItemIndex"
        :active="currentNavItem === navbarItemIndex"
        @click="currentNavItem = navbarItemIndex"
      />
    </ul>
  </nav>
</template>

<script setup>
import NavbarItem from '@/components/Navbar/NavbarItem'
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    default: () => ([]),
  },
})

const currentNavItem = ref(0)
</script>

<style lang="scss" scoped>
.navbar {
  .navbar__list {
    @apply flex space-x-6;
  }
}
</style>