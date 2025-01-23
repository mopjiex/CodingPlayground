<script setup>
import { ref } from 'vue';
import { getFormattedDate } from "@/utils";
import TaskDayInfo from "@/projects/todolist/components/TodoHeader/TaskDayInfo.vue";
import TaskCreateButton from "@/projects/todolist/components/TodoHeader/TaskCreateButton.vue";
import { useTodoStore } from "@/stores/useTodoStore.js";
import { storeToRefs } from "pinia";

const { isShowModal } = storeToRefs(useTodoStore());
const formattedDate = ref(getFormattedDate());

const openModal = () => {
    isShowModal.value = true;
}
</script>

<template>
    <div class="flex items-center justify-between">
        <TaskDayInfo :date-info="formattedDate" />
        <TaskCreateButton @click="openModal" />
    </div>
</template>
