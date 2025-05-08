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
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from '~/components/Container.vue'
import chatIcon from '~/components/Icons/chatIcon.vue'
import requestDefault from '~/api/requestDefault'

onMounted(() => {
  useNuxtApp().$setLoader(false)
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
