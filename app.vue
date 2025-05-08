<template>
  <NuxtLayout>
    <ModalContact :show="modal.contact.show" @close="modal.contact.show = false" />
    <Loader v-model="hiddenLoader" />
    <Toaster v-model="toastShow" :text="toastText" :type="toastType" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import Loader from './components/Loader.vue'
import Toaster from './components/Toaster.vue'

const hiddenLoader = ref(true)
const modal = ref({
  contact: {
    show: false,
  },
})

const toast = ref({
  show: false,
  text: '',
  type: '',
})

const toastShow = ref(false)
const toastText = ref('')
const toastType = ref('')

useNuxtApp().provide('toaster', showToaster)

useNuxtApp().provide('setLoader', active => {
  hiddenLoader.value = active
})

function showToaster(text, type) {
  toastText.value = text
  toastType.value = type
  toastShow.value = true
}

useRouter().beforeEach(to => {
  hiddenLoader.value = true
})
</script>

<style lang="scss">
@import url('@/assets/css/normalize.css');
@import url('@/assets/css/main.scss');
@import url('@/assets/css/scrollbar.scss');
</style>
