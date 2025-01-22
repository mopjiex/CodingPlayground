<script setup>
const value = defineModel('value');
</script>

<template>
    <input type="text" class="w-full p-[10px] text-xl outline-none rounded-md" v-model="value"/>
</template>