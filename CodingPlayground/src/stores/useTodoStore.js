import { defineStore } from "pinia";
import { ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
    const todoItems = ref([]);
    const isShowModal = ref(false);
    const title = ref('');
    const description = ref('');
    const countCheckTask = ref(0);
    const activeTab = ref( {id: 1, name: 'Все'});
    return {
        todoItems,
        isShowModal,
        title,
        description,
        countCheckTask,
        activeTab
    }
})