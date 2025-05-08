<template>
  <div
    @keyup.enter="send"
    class="border-secondary_bg mt-[30px] box-border flex h-[70px] w-[600px] overflow-hidden rounded-sm border-[3px]"
  >
    <div
      @click="voice"
      class="bg-secondary_bg flex cursor-pointer items-center justify-center rounded-[5px] px-[20px] opacity-90 transition-all hover:opacity-60"
    >
      <voiceIcon />
    </div>
    <input
      v-model="text"
      type="text"
      placeholder="Ask whatever you want"
      class="border text-text_color w-full border-none bg-transparent indent-5 outline-none"
    />
    <div
      @click="send"
      class="bg-secondary_bg flex cursor-pointer items-center justify-center rounded-[5px] px-[20px] opacity-90 transition-all hover:opacity-60"
    >
      <arrowIcon />
    </div>
  </div>
</template>

<script setup>
import { watch, defineEmits } from 'vue'
import chatIcon from '~/components/Icons/chatIcon.vue'
import arrowIcon from '~/components/Icons/arrowIcon.vue'
import voiceIcon from '~/components/Icons/voiceIcon.vue'

const emit = defineEmits(['text', 'send'])
const text = ref('')

const voice = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()
  recognition.lang = 'ru-RU'
  recognition.interimResults = false
  recognition.maxAlternatives = 1

  recognition.start()

  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript
    text.value = transcript
    emit('text', text.value)
  }

  recognition.onerror = event => {
    console.error(event.error)
  }
}

function send() {
  emit('send', text.value)
  text.value = ''
}

watch(text, newValue => {
  emit('text', newValue)
})
</script>
