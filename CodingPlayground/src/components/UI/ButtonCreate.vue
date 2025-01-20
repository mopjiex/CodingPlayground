<script setup>
const emit = defineEmits(['click']);

const clickButton = () => emit('click');
</script>

<template>
    <button class="bg-[#e2ebfa] p-3 rounded-xl text-[#1558cf] font-semibold transition-all duration-300
                    flex items-center gap-2 hover:bg-[#0556dc] hover:text-white"
        @click="clickButton"
    >
        <slot/>
    </button>
</template>

