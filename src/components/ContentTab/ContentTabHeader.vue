<template>
  <div class="content-tab-header">
    <h2 class="content-tab-header__label">
      {{ label }}
    </h2>
    <slot name="actions" />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.content-tab-header {
  @apply pt-12 px-12;

  &__label {
    @apply text-center text-2xl font-medium
      mb-6;
  }
}
</style>