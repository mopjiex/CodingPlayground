<script setup>
defineProps({
    title: { type: String, default: null },
    description: { type: String, default: null },
    creationDate: { type: String, default: null },
    check: { type: Boolean, default: null },
});
</script>

<template>
    <div>
        <div class="flex items-center justify-between mb-[15px]">
            <div class="max-w-[350px]">
                <h2
                    class="text-2xl mb-[15px]"
                    :class="check ? 'line-through' : ''"
                >
                    {{ title }}
                </h2>
                <h3
                    class="text-sm"
                    :class="check ? 'line-through' : ''"
                >
                    {{ description }}
                </h3>
            </div>
        </div>
        <div>
            <p class="text-sm">{{ creationDate }}</p>
        </div>
    </div>
</template>
