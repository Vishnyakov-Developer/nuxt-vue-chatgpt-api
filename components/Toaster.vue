<template>
  <div class="toaster" :class="{ toaster_hide: !modelValue }">
    <div class="toaster__inner">
      <svg
        v-if="props.type == 'success'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24ZM18.4452 8.202C18.5013 8.14417 18.5452 8.07562 18.5743 8.00044C18.6034 7.92527 18.617 7.845 18.6144 7.76445C18.6117 7.68389 18.5929 7.6047 18.559 7.53158C18.525 7.45847 18.4767 7.39294 18.4169 7.3389C18.3571 7.28487 18.2871 7.24343 18.2109 7.21708C18.1347 7.19072 18.054 7.17998 17.9736 7.18549C17.8932 7.19101 17.8147 7.21267 17.7429 7.24918C17.671 7.28569 17.6073 7.33631 17.5554 7.398L10.368 15.3402L6.414 11.5656C6.29895 11.4556 6.14493 11.3959 5.98582 11.3995C5.82672 11.4031 5.67556 11.4697 5.5656 11.5848C5.45564 11.6999 5.39589 11.8539 5.39949 12.013C5.40309 12.1721 5.46975 12.3232 5.5848 12.4332L9.9852 16.6332L10.431 17.0592L10.8444 16.602L18.4452 8.202Z"
          fill="#1ACC4C"
        />
      </svg>
      <svg
        v-if="props.type == 'danger' || props.type == 'error'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12ZM7.3332 16.6668C7.22072 16.5543 7.15753 16.4017 7.15753 16.2426C7.15753 16.0835 7.22072 15.9309 7.3332 15.8184L11.1516 12L7.3332 8.1816C7.22391 8.06844 7.16343 7.91688 7.1648 7.75956C7.16616 7.60224 7.22926 7.45175 7.34051 7.34051C7.45175 7.22926 7.60224 7.16616 7.75956 7.1648C7.91688 7.16343 8.06844 7.22391 8.1816 7.3332L12 11.1516L15.8184 7.3332C15.9316 7.22391 16.0831 7.16343 16.2404 7.1648C16.3978 7.16616 16.5482 7.22926 16.6595 7.34051C16.7707 7.45175 16.8338 7.60224 16.8352 7.75956C16.8366 7.91688 16.7761 8.06844 16.6668 8.1816L12.8484 12L16.6668 15.8184C16.7761 15.9316 16.8366 16.0831 16.8352 16.2404C16.8338 16.3978 16.7707 16.5482 16.6595 16.6595C16.5482 16.7707 16.3978 16.8338 16.2404 16.8352C16.0831 16.8366 15.9316 16.7761 15.8184 16.6668L12 12.8484L8.1816 16.6668C8.06908 16.7793 7.9165 16.8425 7.7574 16.8425C7.5983 16.8425 7.44572 16.7793 7.3332 16.6668Z"
          fill="#CC1A1A"
        />
      </svg>
      <span>{{ props.text }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue'

const props = defineProps({
  type: '',
  text: '',
  modelValue: false,
})

const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue) {
      setTimeout(() => {
        emit('update:modelValue', false)
      }, 2000)
    }
  },
)
</script>

<style scoped lang="scss">
.toaster {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  align-items: center;
  height: 100dvh;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  &_hide {
    background: transparent;
    z-index: -1;
    .toaster__inner {
      transform: translateY(-100dvw);
    }
  }
  &__inner {
    margin: 30px auto;
    transition: all 0.5s;
    transform: translateY(0);
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--mainFont);
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #707070;

    padding: 20px 70px;
    border: 1px solid #e7e7e7;
    border-radius: 21px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.07);
    background: white;
  }
}
</style>
