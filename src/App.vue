<script setup lang="ts">
import { useRecordsStore } from './stores/records'
import Post from './components/Post.vue'
import NewPost from './components/NewPost.vue'

const recordsStore = useRecordsStore()
</script>

<template>
  <header>
    <NewPost />
  </header>
  <main>
    <Post
      v-for="record in recordsStore.posts"
      :id="record.id"
      :title="record.title"
      :comments="record.comments"
      :commentsQuantity="recordsStore.commentsQuantity(record.id) ?? 0"
    />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
