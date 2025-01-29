<script setup>
import CalculatorDisplay from "@/projects/calculator/components/CalculatorDisplay.vue";
import { ref } from 'vue';
import CalculatorButtonPanel from "@/projects/calculator/components/CalculatorButtonPanel.vue";
import Hangman from "@/projects/calculator/view/Hangman.vue";

//Переменные
const calculatorDisplayValue = ref('');
const isHangmanShow = ref(false);
//Функции
const appendToDisplay = (value) => {
    console.log(value)
    if(value === '=') {
        calculatorDisplayValue.value = eval(calculatorDisplayValue.value);
        isHangmanShow.value = true;
        return;
    }
    calculatorDisplayValue.value += value;
}

const clearValue = () => {
    calculatorDisplayValue.value = "";
}
</script>

<template>
    <Hangman v-if="isHangmanShow" :answer="calculatorDisplayValue"/>
    <div class="calculator min-h-screen bg-[#4da6d8] font-sofia" v-else>
        <div class="container mx-auto px-4">
            <div class="min-h-screen flex flex-col items-center justify-center">
                <div class="calculator-content bg-[#151434] w-[300px] h-[400px]">
                    <CalculatorDisplay v-model:value="calculatorDisplayValue"/>
                    <CalculatorButtonPanel @click="appendToDisplay" @clear="clearValue"/>
                </div>
            </div>
        </div>
    </div>
</template>