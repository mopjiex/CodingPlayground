<script setup>
import { ref } from 'vue';
const props = defineProps({
    answer: {
        type: Number,
        default: null
    }
})

//Переменные
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const t = String(props.answer).split('').map(n => Number(n));
const b = ref({})
const count = ref(0)

const clickerNumbers = (value) => {
    console.log(value);
    if(t.includes(value)) {
        b.value[value] = t.includes(value);
        f(value)
    }
    count.value += 1;

}

const f = (value) => {
    const a = Object.keys(b.value).find(key => +key === value);
    return t.includes(+a);
}

const win = () => {
    return Object.keys(b.value).length === t.length
}

</script>

<template>
    <div class="hangman min-h-screen bg-[#00b3cc]">
        <div class="container mx-auto px-4 font-sofia">
            <div class="hangman-content min-h-screen flex flex-col justify-center items-center">
                <div class="hangman-viselica mb-10">
                    Тут виселица
                    {{ t }}
                    {{ b }}

                    {{ win()}}
                    {{ count }}
                </div>

                <div class="hangman-numbers flex justify-center gap-[20px] items-center mb-[20px]">
                    <div
                        class="w-[138px] h-[160px] bg-red-300 text-9xl py-4 px-8 rounded-md"
                        v-for="(number, key) in t" :key="key"

                    >
                        <span
                            :class="f(number) ? 'block' : 'hidden'"
                        >
                            {{ number }}
                        </span>
                    </div>
                </div>

                <div class="hangman-numbers w-full flex justify-between items-center">
                    <div
                        class="bg-red-300 text-9xl py-4 px-8 rounded-md cursor-pointer"
                        :class="[{'bg-blue-500' : b[number], 'pointer-events-none' : f(number)}]"
                        v-for="(number, key) in numbers" :key="key"
                        @click="clickerNumbers(number)"
                    >
                        {{ number }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

