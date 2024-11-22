<template>
  <li class="breadcrumbs-item">
    <!-- vue router replacement -->
    <a
      class="breadcrumbs-item__link"
      :class="{ 'breadcrumbs-item__link_active': active }"
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
.breadcrumbs-item {
  @apply text-gray-400 text-[0.8125rem] leading-4;

  &:not(:first-child) {
    @apply before:content-['→'] before:pr-2;
  }

  .breadcrumbs-item__link {
    @apply border-b border-primary-50;

    &_active {
      @apply text-primary-400;
    }
  }
}
</style>