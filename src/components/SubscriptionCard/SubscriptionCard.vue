<template>
  <div
    class="subscription-card"
    :class="{ 'subscription-card_active': active }"
  >
    <div class="subscription-card__content">
      <subscription-card-header
        :title="title"
        :category="category"
        :preview="previewSrc.sm"
      />
      <div class="subscription-card__description">
        {{ description }}
      </div>
      <subscription-card-list :items="amenities" />
      <div class="subscription-card__actions">
        <action-switch
          :model-value="active"
          :label="actionSwitchLabel"
          @update:model-value="switchSubscription"
        />
      </div>
    </div>
    <img
      class="subscription-card__preview"
      :src="previewSrc.lg"
    />
  </div>
</template>

<script setup>
import SubscriptionCardHeader from '@/components/SubscriptionCard/SubscriptionCardHeader'
import SubscriptionCardList from '@/components/SubscriptionCard/SubscriptionCardList'
import ActionSwitch from '@/components/Switch/Switch'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  previewSrc: {
    type: Object,
    default: () => ({}),
  },
  amenities: {
    type: Array,
    default: () => ([]),
  },
  followCount: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['switch'])
const switchSubscription = val => emit('switch', val)

const actionSwitchLabel = computed(() => `Уже получает ${props.followCount} человек`)
</script>

<style lang="scss" scoped>
.subscription-card {
  @apply flex bg-white transition-shadow
    rounded-xl py-6 px-4
    lg:p-6 lg:rounded-2xl;

  &__content {
    @apply w-full lg:mr-6;
  }

  &__description {
    @apply text-gray text-sm mt-2 mb-4;
  }

  &__actions {
    @apply mt-4;
  }

  &__preview {
    @apply hidden h-max lg:block;
  }

  &.subscription-card_active {
    @apply drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)];
  }
}
</style>