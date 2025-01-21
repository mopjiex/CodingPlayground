<script setup>
import ButtonCheck from "@/components/UI/ButtonCheck.vue";
import TaskInfoHeader from "@/projects/todolist/components/TaskCard/TaskInfoHeader.vue";

defineProps({
    title: { type: String, default: null },
    description: { type: String, default: null },
    date: { type: String, default: null }
});
</script>

<template>
    <div class="p-2 rounded shadow-2xl flex items-center justify-between bg-red-300">
        <TaskInfoHeader :title="title" :description="description" :date="date"/>
        <div class="">
            <ButtonCheck/>
        </div>
    </div>
</template>
