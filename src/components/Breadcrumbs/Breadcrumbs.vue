<template>
  <ul class="breadcrumbs">
    <breadcrumbs-item
      v-for="(breadcrumb, breadcrumbIndex) in items"
      v-bind="breadcrumb"
      :key="breadcrumb"
      :active="currentBreadCrumb === breadcrumbIndex"
      @click="currentBreadCrumb = breadcrumbIndex"
    />
  </ul>
</template>

<script setup>
import BreadcrumbsItem from '@/components/Breadcrumbs/BreadcrumbsItem'
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    default: () => ([]),
  },
})

// vue router replacement
const currentBreadCrumb = ref(0)
</script>

<style lang="scss" scoped>
.breadcrumbs {
  @apply flex space-x-2;
}
</style>