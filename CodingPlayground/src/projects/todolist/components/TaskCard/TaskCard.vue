<script setup>
import ButtonCheck from "@/components/UI/Buttons/ButtonCheck.vue";
import TaskInfoHeader from "@/projects/todolist/components/TaskCard/TaskInfoHeader.vue";
import { getFormattedDate } from '@/utils/index.js';

defineProps({
    title: { type: String, default: null },
    description: { type: String, default: null },
    creationDate: { type: String, default: null }
});

</script>

<template>
    <div class="p-2 rounded-xl flex items-center justify-between border-2 ">
        <TaskInfoHeader
            :title="title"
            :description="description"
            :creationDate="getFormattedDate(new Date(creationDate), 'full')"
        />
        <div class="">
            <ButtonCheck/>
        </div>
    </div>
</template>
