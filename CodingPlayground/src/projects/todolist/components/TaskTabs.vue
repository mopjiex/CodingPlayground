<script setup>
import { ref } from 'vue';
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/useTodoStore.js";

const { activeTab } = storeToRefs(useTodoStore());

const tabs = [
    {id: 1, name: 'Все'},
    {id: 2, name: 'Открытые'},
    {id: 3, name: 'Закрытые'},
]

const currentTabs = ref(0);

const tt = (index) => {
    currentTabs.value = index
    activeTab.value = tabs[index];
};
</script>

<template>
    <div class="">
        <ul class="flex justify-center gap-[35px]">
           <li
               class="cursor-pointer"
               :class="currentTabs === index ? 'text-[#1558cf]' : ''"
               v-for="(tab, index) in tabs"
               :key="tab.id"
               @click="tt(index)"
           >
                {{ tab.name }}
           </li>
        </ul>
    </div>
</template>
