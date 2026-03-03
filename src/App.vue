<script setup lang="ts">
import { useRecordsStore } from './stores/records';

const recordsStore = useRecordsStore()
console.log(recordsStore.posts)
</script>

<template>
  <header></header>
  <main>
    <p v-for="record in recordsStore.posts" :key="record.id">
      {{ record.title }}
      <hr>
      <p v-for="comment in record.comments" :key="record.id + '_' + comment.id">
        {{ comment.text }}
      </p>
    </p>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
