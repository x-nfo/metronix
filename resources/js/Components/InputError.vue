<script setup>
defineProps(['message']);
</script>

<template>
    <div v-show="message">
        <p class="text-sm text-danger">
            {{ message }}
        </p>
    </div>
</template>
