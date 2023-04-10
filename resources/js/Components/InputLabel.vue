<script setup>
defineProps({
    value: {
        type: String,
    },
    isRequired: { type: Boolean, default: false, required: false },
});
</script>

<template>
    <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
        <span v-if="value" :class="isRequired === true && 'required'">{{
            value
        }}</span>
        <span v-else><slot /></span>
    </label>
</template>
