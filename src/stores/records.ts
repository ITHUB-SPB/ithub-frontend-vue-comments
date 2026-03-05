import { defineStore } from 'pinia'

export const useRecordsStore = defineStore('records', {
  state: () => ({
    posts: [
      {
        id: 1,
        title:
          'Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.',
        comments: [
          { id: 1, text: 'Самый яркий комментарий в этом посте' },
          { id: 2, text: 'Один из бессмысленный комментарий в этом посте' },
        ],
      },
      {
        id: 2,
        title:
          'Краткосрочное вымышленное преломление может выполнять особую роль в пространстве главной роли игрока ',
        comments: [{ id: 1, text: 'Очень научно и непонятно' }],
      },
    ],
  }),
  getters: {
    commentsQuantity: (state) => {
      return (postId: number) => state.posts.find(({ id }) => id === postId)?.comments.length
    },
  },
  actions: {
    addPost(title: string) {
      if (!this.posts.length) {
        this.posts.push({
          id: 1,
          title,
          comments: [],
        })
      } else {
        const lastId = this.posts[this.posts.length - 1]?.id!
        this.posts.push({
          id: lastId + 1,
          title,
          comments: [],
        })
      }
    },
    deletePost(postId: number) {
      const postIndex = this.posts.findIndex(({ id }) => id === postId)
      this.posts.splice(postIndex, 1)
    },
    deleteComment(postId: number, commentId: number) {
      const post = this.posts.find(({ id }) => id === postId)
      const commentIndex = post?.comments.findIndex(({ id }) => id === commentId)
      if (commentIndex !== undefined) {
        post?.comments.splice(commentIndex, 1)
      }
    },
  },
})
