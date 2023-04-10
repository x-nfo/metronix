<script setup>
import DangerButton from '@/Components/DangerButton.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { useForm } from '@inertiajs/vue3';
import { watchEffect } from 'vue';

const props = defineProps({
    show: Boolean,
    title: String,
    selectedId: Object,
});

const emit = defineEmits(['close']);

const form = useForm({
    id: [],
});

const destory = () => {
    form.post(route('role.destroy-bulk'), {
        preserveScroll: true,
        onSuccess: () => {
            emit('close');
            form.reset();
        },
        onError: () => null,
        onFinish: () => null,
    });
};

watchEffect(() => {
    if (props.show) {
        form.id = props.selectedId;
    }
});
</script>

<template>
    <section class="space-y-6">
        <Modal id="modal_delete_bulk">
            <template #title>
                {{ lang().label.delete }} {{ props.title }}
            </template>
            <template #body>
                <form @submit.prevent="destory">
                    <p class="fs-4 pt-5">
                        {{ lang().label.delete_confirm }}
                        <b class="text-danger fs-3">{{
                            props.selectedId?.length
                        }}</b>
                        {{ props.title }}?
                    </p>
                </form>
            </template>
            <template #footer>
                <div class="d-flex gap-2">
                    <SecondaryButton
                        :disabled="form.processing"
                        @click="emit('close')"
                    >
                        {{ lang().button.close }}
                    </SecondaryButton>
                    <DangerButton
                        class="ml-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="destory"
                    >
                        {{
                            form.processing
                                ? lang().button.delete + '...'
                                : lang().button.delete
                        }}
                    </DangerButton>
                </div>
            </template>
        </Modal>
    </section>
</template>
