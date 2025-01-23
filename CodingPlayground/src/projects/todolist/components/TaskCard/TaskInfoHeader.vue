<script setup>
defineProps({
    title: { type: String, default: null },
    description: { type: String, default: null },
    creationDate: { type: String, default: null }
});
</script>

<template>
    <div>
        <div class="flex items-center justify-between mb-[15px]">
            <div class="max-w-[350px]">
                <h2 class="text-2xl mb-[15px]">{{ title }}</h2>
                <h3 class="text-sm">{{ description }}</h3>
            </div>
        </div>
        <div>
            <p class="text-sm">{{ creationDate }}</p>
        </div>
    </div>
</template>
