<template>
  <div class="content text-red-50">Запрашиваемая страница не найдена</div>
</template>

<script setup>
definePageMeta({
  layout: 'only-header',
})

useSeoMeta({
  title: '404',
  description: 'Страница не найдена',
})
</script>

<style scoped lang="scss"></style>
