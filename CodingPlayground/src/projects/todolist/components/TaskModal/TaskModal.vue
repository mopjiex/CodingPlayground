<script setup>
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/useTodoStore.js";
import TaskInputLabel from "@/projects/todolist/components/TaskModal/TaskInputLabel.vue";
import ButtonTaskAction from "@/components/UI/Buttons/ButtonTaskAction.vue";
import { getRandomInt, randomComments, capitalize } from "@/utils/index.js";

const { todoItems, title, description } = storeToRefs(useTodoStore());
//Пропсы
defineProps({
    showModal: {
        type: Boolean,
        default: false
    }
})
//Эмиты
const emit = defineEmits(['update:showModal']);

//Функции
const addTodoTask = () => {
    todoItems.value.push({
        id: todoItems.value.length + 1,
        title: capitalize(title.value),
        description: description.value ? description.value : randomComments[getRandomInt(0, randomComments.length - 1)],
        creationDate: String(new Date()),
        isFinished: false
    });
    title.value = '';
    description.value = '';
    emit('update:showModal', false)

}

const closeModal = () => emit('update:showModal', false);
</script>

<template>
    <div class="absolute min-h-screen flex items-center justify-center w-full bg-[#1a1d3a33]" v-if="showModal">
        <div class="bg-red-300 py[20px] px-[10px] w-[400px] h-[400px] rounded-xl">
            <div class="modal-content flex flex-col items w-full h-full py-[20px] gap-[20px]">
                <h2 class="text-center text-2xl">Добавление новой записи</h2>
                <div class="flex flex-col gap-[20px]">
                    <TaskInputLabel label-text="Введите задачу" v-model:value="title"/>
                    <TaskInputLabel label-text="Введите описание" v-model:value="description"/>
                </div>

                <div class="flex gap-[20px]">
                    <ButtonTaskAction @click="addTodoTask" :disabled="!title">Добавить</ButtonTaskAction>
                    <ButtonTaskAction @click="closeModal" type="close">Отмена</ButtonTaskAction>
                </div>
            </div>
        </div>
    </div>

</template>
