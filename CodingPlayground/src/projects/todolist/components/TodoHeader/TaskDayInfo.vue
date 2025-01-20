<script setup>

defineProps({
    dateInfo: {
        type: String,
        default: null
    }
})
</script>

<template>
    <div class="">
        <h1 class="text-2xl">Сегодняшняя задача</h1>
        <h2>{{ dateInfo }}</h2>
    </div>
</template>

