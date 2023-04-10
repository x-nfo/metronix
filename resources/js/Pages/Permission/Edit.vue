<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { watchEffect } from 'vue';

const props = defineProps({
    show: Boolean,
    title: String,
    permission: Object,
});

const emit = defineEmits(['close']);

const form = useForm({
    name: '',
});

const update = () => {
    form.put(route('permission.update', props.permission?.id), {
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
        form.name = props.permission?.name;
    }
});
</script>

<template>
    <section class="space-y-6">
        <Modal id="modal_edit">
            <template #title>
                {{ lang().label.edit }} {{ props.title }}</template
            >
            <template #body
                ><form class="p-6" @submit.prevent="update">
                    <div class="my-1">
                        <div class="mb-8">
                            <InputLabel for="name" :value="lang().label.role" />
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
                        @click="update"
                    >
                        {{
                            form.processing
                                ? lang().button.save + '...'
                                : lang().button.save
                        }}
                    </PrimaryButton>
                </div></template
            >
        </Modal>
    </section>
</template>
