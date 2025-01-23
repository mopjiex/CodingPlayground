<script setup>
import ButtonCreate from "@/components/UI/Buttons/ButtonCreate.vue";
const emit = defineEmits(['click']);
const clickButton = () => emit('click');
</script>

<template>
    <div class="">
        <ButtonCreate @click="clickButton">
            <span class="material-symbols-outlined">
                add
            </span>
            Новая запись
        </ButtonCreate>
    </div>
</template>
