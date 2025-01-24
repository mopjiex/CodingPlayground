<script setup>
import { computed } from 'vue'
import TodoHeader from "@/projects/todolist/components/TodoHeader/TodoHeader.vue";
import TaskCard from "@/projects/todolist/components/TaskCard/TaskCard.vue";
import { useTodoStore } from "@/stores/useTodoStore.js";
import { storeToRefs } from "pinia";
import TaskModal from "@/projects/todolist/components/TaskModal/TaskModal.vue";
import ImageNoEntries from '@/assets/images/no-entries-img.jpg';
import TaskTabs from "@/projects/todolist/components/TaskTabs.vue";


const { todoItems, isShowModal, activeTab } = storeToRefs(useTodoStore());

const filteredTodoItems = computed(() => {
    if(activeTab.value.name === 'Все') return todoItems.value;
    else if(activeTab.value.name === 'Открытые') return todoItems.value.filter(item => {
        if(!item.isFinished) return item;
    })
    else return todoItems.value.filter(item => {
        if(item.isFinished) return item;
    })
})
</script>

<template>
    <TaskModal v-model:show-modal="isShowModal"/>
    <div class="min-h-screen bg-[#3A5E8D]">
        <div class="container mx-auto px-[10px]">
            <div class="flex justify-center items-center min-h-screen">
                <div class="w-[500px] min-h-[552px] p-3 rounded-xl bg-white">
                    <TodoHeader class="mb-6"/>
                    {{ activeTab }}
                    <TaskTabs class="mb-[20px]"/>
                    <div class="task-card max-h-[500px] overflow-y-auto flex flex-col gap-[15px]">
                        <div class="" v-if="todoItems.length < 1">
                            <img :src="ImageNoEntries" alt="Нет записей">
                        </div>
                        <TaskCard
                            v-else
                            v-for="(todoItem, index) in filteredTodoItems"
                            :key="todoItem.id"
                            :index="index"
                            :title="todoItem.title"
                            :description="todoItem.description"
                            :creation-date="todoItem.creationDate"
                            :is-finished="todoItems.isFinished"
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

