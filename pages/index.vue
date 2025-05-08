<template>
  <div class="pt-[50px]">
    <Container>
      <!-- <button class="bg-white" @click="testRequest">CONTENT APP</button> -->
      <div>
        <div class="bg-secondary_bg flex h-[70px] w-[70px] items-center justify-center rounded-sm">
          <chatIcon />
        </div>
        <p class="text-text_color mt-[70px] text-[40px] font-semibold">Hi there!</p>
        <p class="text-text_color mt-[30px] text-[45px] font-bold">What would you like to know?</p>
        <p class="text-text_color mt-[10px] text-[22px] font-light opacity-70">
          Use one of the most common prompts below
          <br />
          or ask your own question
        </p>
        <div
          class="border-secondary_bg mt-[30px] box-border flex h-[70px] w-[600px] overflow-hidden rounded-sm border-[3px] pl-[15px]"
        >
          <input
            type="text"
            placeholder="Ask whatever you want"
            class="border text-text_color w-full border-none bg-transparent outline-none"
          />
          <div
            class="bg-secondary_bg flex cursor-pointer items-center justify-center rounded-[5px] px-[20px] opacity-90 transition-all hover:opacity-60"
          >
            <arrowIcon />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from '~/components/Container.vue'
import requestDefault from '~/api/requestDefault'

import chatIcon from '~/components/Icons/chatIcon.vue'
import arrowIcon from '~/components/Icons/arrowIcon.vue'

onMounted(() => {
  setTimeout(() => {
    useNuxtApp().$setLoader(false)
  }, 1000)
})

const testRequest = async () => {
  requestDefault()
    .then(useNuxtApp().$toaster('Request was successful', 'success'))
    .catch(err => {
      useNuxtApp().$toaster('Request failed', 'error')
      console.error(err)
    })
}
</script>
