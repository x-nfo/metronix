<script setup>
import { ref } from 'vue';

defineProps(['modelValue', 'dataSet']);

defineEmits(['update:modelValue']);

const input = ref(null);
</script>

<template>
    <select
        class="form-select form-select-solid"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
    >
        <option
            v-for="(data, index) in dataSet"
            :key="index"
            :value="data.value"
            class=""
        >
            {{ data.label }}
        </option>
    </select>
</template>
