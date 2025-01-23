<script setup>
defineProps({
    type: {
        type: String,
        default: 'add'
    }
})
const emit = defineEmits(['click']);

const clickButton = () => emit('click');
</script>

<template>
    <button
        class=" w-full py-[10px] px-[15px] rounded-xl text-white transition-all duration-300"
        :class="type === 'add' ? 'bg-[#6BBB6E] hover:bg-[#0eae39]' : 'bg-[#CD5C5C] hover:bg-[#d20606]'"
        @click="clickButton">
        <slot/>
    </button>
</template>
