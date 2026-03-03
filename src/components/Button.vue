<script lang="ts" setup>

type PrimaryText = "Комментарии" | "Изменить" | "Добавить" | "Подтвердить" | "Спрятать"
type DangerText = "Удалить" | "Закрыть"

type PrimaryProps = {
    type: "primary",
    text: PrimaryText,
    handler?: () => void
}

type DangerProps = {
    type: "danger",
    text: DangerText,
    handler?: () => void
}

const props = defineProps<PrimaryProps | DangerProps>()

</script>

<template>
    <button 
        class="button" 
        :class="{ 
            danger: props.type === 'danger', 
            primary: props.type === 'primary'
        }" 
        @click="props.handler()"
    >{{ props.text }}</button>
</template>

<style scoped>
.button {
    border-radius: 15px;
    font-size: 16px;
    color: rgb(252, 251, 251);
    padding: 11px 18px;
    border-color: transparent;
    cursor: pointer;
}

.primary {
    background-color: rgba(33, 108, 255, 1);
}

.danger {
    background-color: rgba(255, 33, 139, 1);
}
</style>