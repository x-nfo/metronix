<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
    error: {
        type: String,
        default: null,
    },
    classes: {
        type: String,
        default: 'form-control-solid',
    },
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        v-bind:class="[error ? 'is-invalid' : '', classes]"
        class="form-control"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
    />
</template>
