<script setup>
import TodoHeader from "@/projects/todolist/components/TodoHeader/TodoHeader.vue";
import TaskCard from "@/projects/todolist/components/TaskCard/TaskCard.vue";
</script>

<template>
    <div class="min-h-screen bg-[#3A5E8D]">
        <div class="container mx-auto">
            <div class="flex justify-center items-center min-h-screen">
                <div class="w-[500px]  p-3 rounded-xl bg-white">
                    <TodoHeader class="mb-6"/>
                    <div class="task-card max-h-[500px] overflow-y-auto flex flex-col gap-[15px]">
                        <TaskCard
                            title="Сходить к стоматологу"
                            description="Образовалась какая-то дыра в зубе, надо проверить"
                            date="20.01.2025 - 11:47"
                        />
                        <TaskCard
                            title="Посмотреть все аниме про учителя Онидзуко"
                            description="Я посмотрел только 10 серий, но это отвал головы"
                            date="20.01.2025 - 11:47"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.task-card::-webkit-scrollbar {
    width: 5px;
}

.task-card::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom right, #4d7fff 0%, #1a56ff 100%);
    border-radius: 5px;
}

.task-card::-webkit-scrollbar-track {
    background-color: #ddd;
    border: 1px solid #ccc;
}
</style>

