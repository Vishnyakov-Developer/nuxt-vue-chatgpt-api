<template>
  <header>
    <Container class="pt-[50px]">
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
    </Container>
  </header>
</template>

<script setup>
import Container from '../Container.vue'
import chatIcon from '../Icons/chatIcon.vue'
</script>
