<script setup>
import DangerButton from '@/Components/DangerButton.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    show: Boolean,
    title: String,
    role: Object,
});

const emit = defineEmits(['close']);
</script>

<template>
    <section class="space-y-6">
        <Modal id="modal_permission">
            <template #title> {{ lang().label.permission }}</template>
            <template #body>
                <div class="fs-5">
                    <p>
                        {{ lang().label.all_permission }}
                        {{ lang().label.role }}
                        <b class="text-primary fw-bold">{{
                            props.role?.name
                        }}</b>
                    </p>
                    <div class="d-flex flex-wrap">
                        <div
                            v-for="(permission, index) in props.role
                                ?.permissions"
                            :key="index"
                            class="min-w-150px me-4 mb-2"
                        >
                            {{ ++index + '. ' + permission.name }}
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="d-flex justify-content-end">
                    <SecondaryButton @click="emit('close')">
                        {{ lang().button.close }}
                    </SecondaryButton>
                </div>
            </template>
        </Modal>
    </section>
</template>
