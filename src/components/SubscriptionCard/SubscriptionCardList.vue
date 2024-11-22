<template>
  <ul class="subscription-card-list">
    <subscription-card-list-item
      v-for="(item, itemIndex) in items"
      :key="itemIndex"
      v-bind="item"
    />
  </ul>
</template>

<script setup>
import SubscriptionCardListItem from '@/components/SubscriptionCard/SubscriptionCardListItem'

defineProps({
  items: {
    type: Array,
    default: () => ([]),
  },
})
</script>

<style lang="scss">
.subscriptions-card-list {
  @apply space-y-2;
}
</style>