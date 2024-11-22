<template>
  <footer class="default-layout-footer">
    <footer-shrug class="default-layout-footer__shrug" />
  </footer>
</template>

<script setup>
import FooterShrug from '@/assets/img/footer-shrug.svg'
</script>

<style lang="scss">
.default-layout-footer {
  @apply py-12;

  &__shrug {
    @apply mx-auto;
  }
}
</style>