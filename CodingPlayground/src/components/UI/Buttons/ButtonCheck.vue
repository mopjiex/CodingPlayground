<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/useTodoStore.js";

const props = defineProps({
    isFinished: { type: Boolean, default: false }
});

const { countCheckTask } = storeToRefs(useTodoStore())
const check = ref(props.isFinished);

const emit = defineEmits(["c"]);
const toggleCheck = () => {
    check.value = !check.value;
    if(check.value) countCheckTask.value += 1;
    else countCheckTask.value -= 1;
    console.log(countCheckTask.value);
    emit('c', check.value);
}

watch(() => props.isFinished, (value) => {
    check.value = value;
});
</script>

<template>
    <button class="rounded-full bg-[#0361f8] flex justify-center items center h-full w-full p-2"
            @click="toggleCheck"
    >
        <span class="material-icons text-white">{{ check ? 'close' : 'check' }}</span>
    </button>
</template>

