<template>
  <input
    v-model="inputValue"
    class="input"
  />
</template>

<script setup>
const inputValue = defineModel({
  type: [
    String,
    null,
  ],
  default: null,
})
</script>

<style lang="scss" scoped>
.input {
  @apply p-4 rounded-lg placeholder:text-gray-500;

  &:focus {
    @apply outline-0;
  }
}
</style>