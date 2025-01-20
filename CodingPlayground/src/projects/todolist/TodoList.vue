<script setup>
import TodoHeader from "@/projects/todolist/components/TodoHeader/TodoHeader.vue";
import TaskCard from "@/projects/todolist/components/TaskCard.vue";
</script>

<template>
    <div class="min-h-screen bg-[#3A5E8D]">
        <div class="container mx-auto">
            <div class="flex justify-center items-center min-h-screen">
                <div class="w-[500px]  p-3 rounded-xl bg-white">
                    <TodoHeader class="mb-6"/>
                    <div class="">
                        <TaskCard
                            title="Какая-то запись"
                            description="Какое-то описание"
                            date="20.01.2025 - 11:47"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

