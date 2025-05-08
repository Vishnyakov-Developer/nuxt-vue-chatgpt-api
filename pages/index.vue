<template>
  <div class="bg-red-400 pt-[50px]">
    <Container>
      <button class="bg-white" @click="testRequest">CONTENT APP</button>
    </Container>
  </div>
</template>

<script setup>
import Container from '~/components/Container.vue'
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
