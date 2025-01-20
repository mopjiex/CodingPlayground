<script setup>
import ButtonCheck from "@/components/UI/ButtonCheck.vue";

defineProps({
    title: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    date: {
        type: String,
        default: null
    }
})
</script>

<template>
    <div class="p-2 rounded shadow-2xl flex items-center justify-between">
        <div class="">
            <div class="flex items-center justify-between">
                <div class="">
                    <h2 class="text-2xl">{{ title }}</h2>
                    <h3 class="text-sm">{{ description }}</h3>
                </div>
            </div>
            <div class="">
                <p class="text-sm">{{ date }}</p>
            </div>
        </div>

        <div class="">
            <ButtonCheck/>
        </div>
    </div>
</template>
