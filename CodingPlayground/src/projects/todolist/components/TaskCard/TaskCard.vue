<script setup>
import { ref } from 'vue';
import ButtonCheck from "@/components/UI/Buttons/ButtonCheck.vue";
import TaskInfoHeader from "@/projects/todolist/components/TaskCard/TaskInfoHeader.vue";
import { getFormattedDate } from '@/utils/index.js';
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/useTodoStore.js";

let { isFinished, index } = defineProps({
    index: { type: Number, default: null },
    title: { type: String, default: null },
    description: { type: String, default: null },
    creationDate: { type: String, default: null },
    isFinished: { type: Boolean, default: false }
});
const emit = defineEmits(["updateFinished"]);
const ch = ref(false)
const localFin = ref(isFinished)
const { todoItems } = storeToRefs(useTodoStore());

const cc = (newState) => {
    localFin.value = newState; // Обновляем локальное состояние
    todoItems.value[index].isFinished = newState; // Обновляем глобальное состояние
    emit("updateFinished", newState); // Сообщаем наверх об изменении состояния
};
</script>

<template>
    <div class="p-2 rounded-xl flex items-center justify-between border-2 ">
        <TaskInfoHeader
            :title="title"
            :description="description"
            :creationDate="getFormattedDate(new Date(creationDate), 'full')"
            :check="localFin"
        />
        <div class="">
            <ButtonCheck :isFinished="localFin" @c="cc"/>
        </div>
    </div>
</template>
