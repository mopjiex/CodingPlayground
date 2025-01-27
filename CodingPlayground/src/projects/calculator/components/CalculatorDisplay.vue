<script setup>
const value = defineModel('value');
</script>

<template>
    <div class="calculator-display p-4">
        <input
            type="text"
            class="
                w-full px-2 outline-none
                bg-transparent border-b-2
                text-white text-3xl
            "
            v-model="value"
        >
    </div>
</template>

