import { defineStore } from "pinia";

export const useRecordsStore = defineStore('records', {
    state: () => ({
        posts: [
            {
                id: 1,
                title: "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.",
                comments: [
                    { id: 1, text: "Самый яркий комментарий в этом посте" },
                    { id: 2, text: "Один из бессмысленный комментарий в этом посте" }
                ]
            },
            {
                id: 2,
                title: "Краткосрочное вымышленное преломление может выполнять особую роль в пространстве главной роли игрока ",
                comments: [
                    { id: 1, text: "Очень научно и непонятно" },
                ]
            }
        ]
    }),
    getters: {
        commentsQuantity: (state) => {
            return (postId: number) => state.posts.find(({ id }) => id === postId).comments.length
        }
    },
    actions: {
        deleteComment: (state) => {
            return (postId: number, commentId: number) => {
                const post = state.posts.find(({ id }) => id === postId)
                const commentIndex = post.comments.findIndex(({ id }) => id === commentId)
                post.comments.splice(commentIndex, 1)
            }
        }
    }
})