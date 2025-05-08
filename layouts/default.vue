<template>
  <div class="layout">
    <HeaderBlock />
    <main class="" style="">
      <slot class="" />
    </main>
    <FooterBlock />
  </div>
</template>

<script setup>
import HeaderBlock from '~/components/Blocks/HeaderBlock.vue'
import FooterBlock from '~/components/Blocks/FooterBlock.vue'
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
</style>
