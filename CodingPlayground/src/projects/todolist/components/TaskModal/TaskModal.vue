<script setup>
import { ref, watch } from 'vue';
import TaskInputLabel from "@/projects/todolist/components/TaskModal/TaskInputLabel.vue";

const inp1 = ref('');
const inp2 = ref('');
const inp3 = ref('');
const inp = () => inp3.value = `${inp1.value} - ${inp2.value}`
</script>

<template>
    <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] modal bg-red-300 py[20px] px-[10px] w-[300px] h-[300px] rounded-xl">
        <div class="modal-content flex flex-col justify-center items w-full h-full">
            <div class="mb-[15px]">
                <TaskInputLabel label-text="Введите задачу" v-model:value="inp1"/>
                <TaskInputLabel label-text="Введите описание" v-model:value="inp2"/>
                {{ inp3 }}
            </div>

            <div class="flex gap-[15px]">
                <button class="bg-fuchsia-600 p-[15px] rounded-xl text-white w-full" @click="inp">Ок</button>
                <button class="bg-fuchsia-600 p-[15px] rounded-xl text-white w-full" @click="inp">Отмена</button>
            </div>
        </div>
    </div>
</template>
