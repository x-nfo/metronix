<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import SelectInput from '@/Components/SelectInput.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { watchEffect } from 'vue';

const props = defineProps({
    show: Boolean,
    title: String,
    user: Object,
    roles: Object,
});

const emit = defineEmits(['close']);

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
});

const update = () => {
    form.put(route('user.update', props.user?.id), {
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
        form.name = props.user?.name;
        form.email = props.user?.email;
        form.role = props.user?.roles == 0 ? '' : props.user?.roles[0].name;
        form.errors = {};
    }
});

const roles = props.roles?.map((role) => ({
    label: role.name,
    value: role.name,
}));
</script>

<template>
    <section class="space-y-6">
        <Modal id="modal_edit">
            <template #title
                >{{ lang().label.edit }} {{ lang().label.user }}
            </template>
            <template #body>
                <form @submit.prevent="update">
                    <div class="my-1">
                        <div class="mb-8">
                            <InputLabel
                                for="name"
                                :value="lang().label.name"
                                :isRequired="true"
                            />
                            <TextInput
                                type="text"
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
                        <div class="mb-8">
                            <InputLabel
                                for="email"
                                :value="lang().label.email"
                            />
                            <TextInput
                                type="email"
                                v-model="form.email"
                                :placeholder="lang().placeholder.email"
                                :error="form.errors.email"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.email"
                            />
                        </div>
                        <div class="mb-8">
                            <InputLabel
                                for="password"
                                :value="lang().label.password"
                            />
                            <TextInput
                                type="password"
                                class=""
                                v-model="form.password"
                                :placeholder="lang().placeholder.password"
                                :error="form.errors.password"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.password"
                            />
                        </div>
                        <div class="mb-8">
                            <InputLabel
                                for="password_confirmation"
                                :value="lang().label.password_confirmation"
                            />
                            <TextInput
                                type="password"
                                v-model="form.password_confirmation"
                                :placeholder="
                                    lang().placeholder.password_confirmation
                                "
                                :error="form.errors.password_confirmation"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.password_confirmation"
                            />
                        </div>
                        <div class="mb-8">
                            <InputLabel
                                for="role"
                                :value="lang().label.role"
                                :isRequired="true"
                            />
                            <SelectInput
                                id="role"
                                class=""
                                v-model="form.role"
                                required
                                :dataSet="roles"
                            >
                            </SelectInput>
                            <InputError
                                class="mt-2"
                                :message="form.errors.role"
                            />
                        </div>
                    </div>
                </form>
            </template>

            <template #footer>
                <div class="d-flex justify-content-end gap-2">
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
                </div>
            </template>
        </Modal>
    </section>
</template>
