<template>
  <label :class="switchClass">
    <input
      v-model="switchValue"
      class="switch__checkbox"
      type="checkbox"
    />
    <span
      class="switch__body"
      :class="{ 'switch__body_active': switchValue }"
    />
    <span class="switch__label">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const switchValue = defineModel({
  type: Boolean,
  default: false,
})

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: 'md',
    validator: val => [
      'sm',
      'md',
    ].includes(val),
  },
})

const switchClass = computed(() => ([
  'switch',
  `switch_size-${props.size}`,
]))
</script>

<style lang="scss">
.switch {
  @apply flex items-center cursor-pointer;

  &__checkbox {
    @apply sr-only;
  }

  &__body {
    @apply relative bg-gray-300 rounded-full
      after:absolute after:content-[''] after:top-px after:start-px after:bg-white after:rounded-full after:transition-all;

    &_active {
      @apply bg-primary
        after:translate-x-full;
    }
  }

  &__label {
    @apply text-sm select-none ml-2;
  }

  &.switch_size {
    &-sm .switch__body {
      @apply w-8 h-4 after:h-3.5 after:w-3.5;
    }
    &-md .switch__body {
      @apply w-12 h-6 after:h-[1.375rem] after:w-[1.375rem];
    }
  }
}
</style>