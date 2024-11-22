<template>
  <div class="content-tab-body">
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content-tab-body {
  @apply pt-6 px-4 pb-8
    lg:pt-8 lg:px-6 lg:pb-12;
}
</style>