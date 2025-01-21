<script setup>
import { ref } from 'vue';
import { getFormattedDate } from "@/utils";
import TaskDayInfo from "@/projects/todolist/components/TodoHeader/TaskDayInfo.vue";
import TaskCreateButton from "@/projects/todolist/components/TodoHeader/TaskCreateButton.vue";

const formattedDate = ref(getFormattedDate());
</script>

<template>
    <div class="flex items-center justify-between">
        <TaskDayInfo :date-info="formattedDate" />
        <TaskCreateButton @click="() => {}" />
    </div>
</template>
