<template>
  <div class="loader" :class="{ hidden: !props.modelValue }">
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  background: var(--backgroundColor);
  width: 100dvw;
  height: 100dvh;
  z-index: 50;
  display: flex;
  justify-content: center;
  overflow: hidden;
  opacity: 1;
  transition: all 0.5s;
  align-items: center;
  &.hidden {
    animation: hide 0.5s forwards;
  }
  &::after {
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-top-color: var(--mainColor);
    animation: rotate 1.3s infinite linear;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes hide {
  0% {
    opacity: 1;
    z-index: 10;
  }
  99% {
    z-index: 10;
    opacity: 0;
  }
  100% {
    opacity: 0;
    z-index: -1;
  }
}
</style>