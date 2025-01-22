<script setup>
import { ref } from 'vue';
import { getFormattedDate } from "@/utils";
import TaskDayInfo from "@/projects/todolist/components/TodoHeader/TaskDayInfo.vue";
import TaskCreateButton from "@/projects/todolist/components/TodoHeader/TaskCreateButton.vue";
import { useTodoStore } from "@/stores/useTodoStore.js";
import { storeToRefs } from "pinia";

const { todoItems } = storeToRefs(useTodoStore());
const formattedDate = ref(getFormattedDate());

const testClick = () => {
    todoItems.value.push({
        id: Math.random(),
        title: 'Какой-то заголовок',
        description: 'Какое-то описание',
        date: '22.01.2025'
    })
}
</script>

<template>
    <div class="flex items-center justify-between">
        <TaskDayInfo :date-info="formattedDate" />
        <TaskCreateButton @click="testClick" />
    </div>
</template>
