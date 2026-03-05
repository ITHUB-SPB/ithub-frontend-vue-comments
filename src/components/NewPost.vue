<script lang="ts" setup>
import Button from './Button.vue'
import { useRecordsStore } from '../stores/records'

const recordsStore = useRecordsStore()

function onSubmit(event: SubmitEvent) {
  const form = event.target as HTMLFormElement
  const inputElement = form.elements[0] as HTMLInputElement
  recordsStore.addPost(inputElement.value)
  inputElement.value = ''
}
</script>

<template>
  <form action="" @submit.prevent="onSubmit">
    <input type="text" placeholder="Новый пост" name="title" />
    <Button text="Добавить" type="primary" />
  </form>
</template>

<style scoped></style>
