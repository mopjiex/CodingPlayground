<script setup>

//Эмиты
const emit = defineEmits(['clear']);

//Функции
const clearValue = () => emit('clear');
</script>

<template>
    <div class="mb-4 flex justify-end">
        <button class="text-white text-xl bg-transparent" @click="clearValue">
            <slot/>
        </button>
    </div>
</template>

