<template>
  <div class="subscription-card-header">
    <div class="subscription-card-header__body">
      <div class="subscription-card-header__category">
        {{ category }}
      </div>
      <h3 class="subscription-card-header__title">
        {{ title }}
      </h3>
    </div>
    <img
      class="subscription-card-header__preview"
      :src="preview"
    />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    default: null,
  },
  preview: {
    type: String,
    default: null,
  },
})
</script>

<style lang="scss">
.subscription-card-header {
  @apply flex justify-between;

  &__category {
    @apply text-[0.8125rem] leading-4 text-gray-400;
  }

  &__title {
    @apply text-xl font-medium;
  }

  &__preview {
    @apply ml-auto lg:hidden;
  }
}
</style>