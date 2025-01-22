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
    <label class="text-center">
        <span class="text-xl"> {{ labelText }}</span>
        <InputTodo v-model:value="value"/>
    </label>
</template>

