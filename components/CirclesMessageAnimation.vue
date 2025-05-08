<template>
  <div class="relative flex items-center justify-center gap-[30px]">
    <div
      :style="{ animationDelay: `${randomDelay(i)}s` }"
      v-for="i in count"
      :key="i"
      class="round"
    ></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  count: {
    type: Number,
    default: 3,
  },
})

function randomDelay(index) {
  return Math.random() * 1.5
}
</script>

<style lang="sass" scoped>
.round
  @apply w-[15px] h-[15px] rounded-[100px] bg-[#fff]
  animation: round 1.5s infinite ease-in-out
@keyframes round
  0%
    transform: translate(0, 0)
  25%
    transform: translateY(-7px)
  50%
  transform: translateY(-5px)
  75%
    transform: translateY(5px)
  100%
    transform: translate(0, 0)
</style>
