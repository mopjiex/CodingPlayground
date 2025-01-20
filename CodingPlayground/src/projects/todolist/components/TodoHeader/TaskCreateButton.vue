<script setup>
import ButtonCreate from "@/components/UI/ButtonCreate.vue";

const clickButton = () => console.log('Клик по кнопке');
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
