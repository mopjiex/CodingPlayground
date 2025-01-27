<script setup>
import CalculatorButtonPannelClear from '@/projects/calculator/components/CalculatorButtonPanel/CalculatorButtonPanelClear.vue';
//Эмиты
const emit = defineEmits(['click', 'clear']);

//Переменные
const calculatorElements = ['7', '8', '9', '/', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '=', '*'];

//Функции
const clickedButton = (value) => emit('click', value);
const clearValue = () => emit('clear');

const getCalculatorSymbolColor = (value) => {
    const symbols = ['/', '*', '-', '+'];
    return symbols.includes(value);
}
</script>

<template>
    <div class="px-4">
        <CalculatorButtonPannelClear @clear="clearValue">Del</CalculatorButtonPannelClear>
        <div class="text-white grid grid-cols-4 gap-3">
            <div
                class="
                bg-[#2e2b48] flex justify-center
                items-center p-3 cursor-pointer
                transition-all duration-300
                rounded-md select-none text-2xl
                hover:bg-[#f1f1f1] hover:text-black
                "
                :class="[{'bg-[#ff2ba9] hover:bg-[#ff3385] hover:text-[#fff]': getCalculatorSymbolColor(element)}]"
                v-for="(element, key) in calculatorElements"
                :key="key"
                @click="clickedButton(element)"
            >
                {{ element }}
            </div>
        </div>
    </div>
</template>
