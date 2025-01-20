<script setup>
import TaskDayInfo from "@/projects/todolist/components/TodoHeader/TaskDayInfo.vue";
import TaskCreateButton from "@/projects/todolist/components/TodoHeader/TaskCreateButton.vue";
</script>

<template>
    <div class="flex items-center justify-between">
        <TaskDayInfo
            date-info="Понедельник, 20 января"
        />
        <TaskCreateButton/>
    </div>
</template>
