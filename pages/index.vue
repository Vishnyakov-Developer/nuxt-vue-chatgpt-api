<template>
  <div class="">
    <Container>
      <InputGPT @text="text = $event" @send="sendMessage" />
      <div
        class="mt-[50px] flex flex-col gap-[20px] overflow-hidden pb-[50px] transition-all duration-500"
        :class="answersGPT.length ? `translate-x-0 opacity-100` : 'translate-x-20 opacity-0'"
      >
        <div
          class="bg-secondary_bg text-text_color rounded-sm px-[40px] py-[30px]"
          v-for="answer in answersGPT"
          :key="answer.id"
        >
          <p class="w-fit rounded-sm bg-background p-[10px] text-[12px]">
            {{ answer.date_string }}
          </p>
          <div class="mt-[25px]">
            <div v-if="!answer.loaded" class="">
              <CirclesMessageAnimation class="w-fit" :count="3" />
            </div>
            <div
              class="max-w-[100%] overflow-x-auto bg-white p-[10px] text-[23px] font-bold"
              v-html="renderAnsw(answer.text.content)"
              v-else
            ></div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from '~/components/Container.vue'
import CirclesMessageAnimation from '~/components/CirclesMessageAnimation.vue'
import requestDefault from '~/api/requestDefault'
import requestMessage from '~/api/requestMessage'
import renderMarkdown from '~/utils/markdownRenderer'

import InputGPT from '~/components/InputGPT.vue'
import getRandToken from '~/utils/getRandToken'
import moment from 'moment'

onMounted(() => {
  setTimeout(() => {
    useNuxtApp().$setLoader(false)
  }, 1000)
})

const renderAnsw = text => {
  const rendered = renderMarkdown(text)
  return rendered
}

const answersGPT = ref([])
const sentMessages = ref([])
const text = ref('')

const sendMessage = async () => {
  if (answersGPT.value[answersGPT.value.length - 1]?.loaded === false) {
    useNuxtApp().$toaster('Please wait for the previous answer', 'error')
    return
  }

  const genId = moment().format('DD.MM.YYYY HH:mm')

  answersGPT.value.unshift({
    loaded: false,
    id: getRandToken(10),
    date_string: genId,
  })

  sentMessages.value.push(text.value)
  text.value = text.value = ''

  requestMessage({ messages: sentMessages.value })
    .then(response => {
      answersGPT.value[0].loaded = true
      answersGPT.value[0].text = response
    })
    .catch(err => {
      console.log(err)
      answersGPT.value.pop()
      useNuxtApp().$toaster(err, 'error')
    })
}
</script>
