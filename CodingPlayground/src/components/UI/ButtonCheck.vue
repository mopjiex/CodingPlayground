<script setup>
import {ref} from "vue";

const check = ref(false);

const toggleCheck = () => {
    check.value = !check.value;
}
</script>

<template>
    <button class="rounded-full bg-[#0361f8] flex justify-center items center h-full w-full p-2"
            @click="toggleCheck"
    >
                    <span class="material-symbols-outlined text-white">
                        {{ check ? 'check' : 'close'}}
                    </span>
    </button>
</template>

