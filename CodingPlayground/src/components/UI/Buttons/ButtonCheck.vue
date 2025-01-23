<script setup>
import {ref} from "vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/useTodoStore.js";

const { countCheckTask } = storeToRefs(useTodoStore())

const check = ref(false);

const toggleCheck = () => {
    check.value = !check.value;
    if(check.value) countCheckTask.value += 1;
    else countCheckTask.value -= 1;
    console.log(countCheckTask.value);
}
</script>

<template>
    <button class="rounded-full bg-[#0361f8] flex justify-center items center h-full w-full p-2"
            @click="toggleCheck"
    >
        <span class="material-icons text-white">{{ check ? 'close' : 'check'}}</span>
    </button>
</template>

