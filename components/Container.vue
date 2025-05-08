<template>
  <div class="container-mobile container">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.container
  max-width: 1100px
  margin: 0 auto
  box-sizing: border-box

.container-mobile
  margin: 0 auto
  box-sizing: border-box
  @media (max-width: 1100px)
    padding: 0 20px
    max-width: 100%
</style>
