<template>
  <li
    class="subscription-card-list-item"
    :class="{ 'subscription-card-list-item_fire': fire }"
  >
    <check-icon class="subscription-card-list-item__icon" />
    {{ label }}
  </li>
</template>

<script setup>
import CheckIcon from '@/assets/icons/Check.svg'

defineProps({
  label: {
    type: String,
    default: null,
  },
  fire: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss">
.subscription-card-list-item {
  @apply flex items-center text-sm;

  &__icon {
    @apply mr-2;
  }

  &.subscription-card-list-item_fire {
    @apply font-medium;
  }
}
</style>