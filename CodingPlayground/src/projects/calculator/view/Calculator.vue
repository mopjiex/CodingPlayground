<script setup>
import CalculatorDisplay from "@/projects/calculator/components/CalculatorDisplay.vue";
import { ref } from 'vue';
import CalculatorButtonPanel from "@/projects/calculator/components/CalculatorButtonPanel.vue";

//Переменные
const calculatorDisplayValue = ref('');

//Функции
const appendToDisplay = (value) => {
    console.log(value)
    if(value === '=') {
        calculatorDisplayValue.value = eval(calculatorDisplayValue.value);
        return;
    }
    calculatorDisplayValue.value += value;
}

const clearValue = () => {
    calculatorDisplayValue.value = "";
}
</script>

<template>
    <div class="calculator min-h-screen bg-[#4da6d8] font-sofia">
        <div class="container mx-auto px-4">
            <div class="min-h-screen flex flex-col items-center justify-center">
                <div class="calculator-content bg-[#151434] w-[300px] h-[500px]">
                    <CalculatorDisplay v-model:value="calculatorDisplayValue"/>
                    <CalculatorButtonPanel @click="appendToDisplay" @clear="clearValue"/>
                </div>
            </div>

        </div>
    </div>
</template>