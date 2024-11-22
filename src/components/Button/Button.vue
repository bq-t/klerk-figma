<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.button {
  @apply py-4 px-8 rounded-[6.25rem]
    text-white bg-primary;
}
</style>