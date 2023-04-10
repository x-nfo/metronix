<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:checked']);

const props = defineProps({
    checked: {
        type: [Array, Boolean],
        default: false,
    },
    value: {
        default: null,
    },
    classes: {
        type: Array,
        default: null,
    },
});

const proxyChecked = computed({
    get() {
        return props.checked;
    },

    set(val) {
        emit('update:checked', val);
    },
});
</script>

<template>
    <div class="form-check form-check-custom form-check-solid">
        <input
            :class="classes"
            class="form-check-input"
            type="checkbox"
            :value="value"
            v-model="proxyChecked"
        />
    </div>
</template>
