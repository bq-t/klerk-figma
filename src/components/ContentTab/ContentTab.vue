<template>
  <div class="content-tab">
    <content-tab-header :label="label">
      <template #actions>
        <slot name="header-actions" />
      </template>
    </content-tab-header>
    <slot name="body">
      <content-tab-body>
        <slot />
      </content-tab-body>
    </slot>
  </div>
</template>

<script setup>
import ContentTabHeader from '@/components/ContentTab/ContentTabHeader'
import ContentTabBody from '@/components/ContentTab/ContentTabBody'

defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.content-tab {
  @apply bg-gray-50 rounded-2xl max-w-5xl;
}
</style>