<script setup>
import InputTodo from "@/components/UI/InputTodo.vue";

defineProps({
    labelText: {
        type: String,
        default: null
    }
})

const value = defineModel('value');
</script>

<template>
    <label class="">
        <span class="inline-block text-xl mb-[15px]"> {{ labelText }}</span>
        <InputTodo v-model:value="value"/>
    </label>
</template>

