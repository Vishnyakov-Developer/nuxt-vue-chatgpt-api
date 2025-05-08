<template>
  <div @click="handle">ERROR {{ error }}</div>
</template>

<script setup>
const { error } = defineProps(['error'])
const handle = () => clearError({ redirect: '/' })

if (error.statusCode === 404) {
  console.log('page not found')
  clearError({ redirect: '/404' })
}

definePageMeta({
  layout: 'default',
})
</script>

<style lang="scss" scoped></style>
