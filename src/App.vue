<script setup lang="ts">
import { useRecordsStore } from './stores/records';
import Post from './components/Post.vue';

const recordsStore = useRecordsStore()
</script>

<template>
  <header></header>
  <main>
    <Post 
      v-for="record in recordsStore.posts" 
      :id="record.id" 
      :title="record.title" 
      :comments="record.comments"
      :commentsQuantity="recordsStore.commentsQuantity(record.id)"
    />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
