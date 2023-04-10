<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    show: Boolean,
    title: String,
});

const emit = defineEmits(['close']);

const form = useForm({
    name: '',
});

const create = () => {
    form.post(route('permission.store'), {
        preserveScroll: true,
        onSuccess: () => {
            emit('close');
            form.reset();
        },
        onError: () => null,
        onFinish: () => null,
    });
};
</script>

<template>
    <section class="space-y-6">
        <Modal id="modal_create">
            <template #title>
                {{ lang().label.add }} {{ props.title }}
            </template>

            <template #body>
                <form @submit.prevent="create">
                    <div class="my-8">
                        <div>
                            <InputLabel
                                for="name"
                                :value="lang().label.role"
                                :isRequired="true"
                            />
                            <TextInput
                                id="name"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.name"
                                required
                                :placeholder="lang().placeholder.name"
                                :error="form.errors.name"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.name"
                            />
                        </div>
                    </div>
                </form>
            </template>

            <template #footer>
                <div class="d-flex gap-4">
                    <SecondaryButton
                        :disabled="form.processing"
                        @click="emit('close')"
                    >
                        {{ lang().button.close }}
                    </SecondaryButton>
                    <PrimaryButton
                        class="ml-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="create"
                    >
                        {{
                            form.processing
                                ? lang().button.add + '...'
                                : lang().button.add
                        }}
                    </PrimaryButton>
                </div>
            </template>
        </Modal>
    </section>
</template>
