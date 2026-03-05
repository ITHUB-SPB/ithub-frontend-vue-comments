<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'
import { useRecordsStore } from '../stores/records'

type Comment = {
  id: number
  text: string
}

type Post = {
  id: number
  title: string
  comments: Comment[]
}

type PostProps = Post & {
  commentsQuantity: number
}

const props = defineProps<PostProps>()
const hasExtend = ref(false)
const recordsStore = useRecordsStore()

function extend() {
  hasExtend.value = true
}

function hide() {
  hasExtend.value = false
}
</script>

<template>
  <article>
    <p>{{ props.title }}</p>
    <hr />
    <section v-if="!hasExtend">
      <Button :handler="extend" text="Комментарии" type="primary" />
      <span>Количество комментариев - {{ props.commentsQuantity }}</span>
      <Button text="Изменить" type="primary" />
      <Button :handler="() => recordsStore.deletePost(props.id)" text="Удалить" type="danger" />
    </section>
    <section v-else>
      <p v-for="comment in props.comments" :key="props.id + '_' + comment.id">
        {{ comment.text }}
        <Button
          :handler="() => recordsStore.deleteComment(props.id, comment.id)"
          text="Удалить"
          type="danger"
        />
      </p>
      <Button :handler="hide" text="Спрятать" type="primary" />
    </section>
  </article>
</template>

<style scoped></style>
