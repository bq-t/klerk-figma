<template>
  <li
    class="navbar-item"
    :class="{ 'navbar-item_active': active }"
  >
    <a
      class="navbar-item__link"
      href="#"
    >
      {{ label }}
    </a>
  </li>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: Object,
    default: () => ({}),
  },
  active: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.navbar-item {
  @apply cursor-pointer pb-4;

  .navbar-item__link {
    @apply text-gray-500 transition-colors;
  }

  &.navbar-item_active {
    @apply border-b-2 border-primary-500;

    .navbar-item__link {
      @apply text-primary-500 font-medium;
    }
  }
}
</style>