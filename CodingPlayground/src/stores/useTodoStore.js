import { defineStore } from "pinia";
import { ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
    const todoItems = ref([]);

    return {
        todoItems
    }
})