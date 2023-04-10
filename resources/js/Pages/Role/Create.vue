<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue';
import { reactive } from 'vue';

const props = defineProps({
    show: Boolean,
    title: String,
    permissions: Object,
});

const emit = defineEmits(['close']);

const data = reactive({
    multipleSelect: false,
});

const form = useForm({
    name: '',
    guard_name: 'web',
    permissions: [],
});

const create = () => {
    form.post(route('role.store'), {
        preserveScroll: true,
        onSuccess: () => {
            emit('close');
            form.reset();
            data.multipleSelect = false;
        },
        onError: () => null,
        onFinish: () => null,
    });
};

const selectAll = (event) => {
    if (event.target.checked === false) {
        form.permissions = [];
    } else {
        form.permissions = [];
        props.permissions.forEach((permission) => {
            form.permissions.push(permission.id);
        });
    }
};
const select = () => {
    if (props.permissions.length == form.permissions.length) {
        data.multipleSelect = true;
    } else {
        data.multipleSelect = false;
    }
};
</script>

<template>
    <section class="space-y-6">
        <Modal id="modal_create" width="mw-850px">
            <template #title>
                {{ lang().label.add }} {{ props.title }}
            </template>

            <template #body>
                <form @submit.prevent="create">
                    <div class="my-1">
                        <div class="mb-8">
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
                        <div class="mb-8 form-group">
                            <InputLabel
                                :value="lang().label.permission"
                                :isRequired="true"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.permissions"
                            />

                            <div
                                class="form-check d-flex align-items-center col-3"
                            >
                                <Checkbox
                                    id="permission-all"
                                    class="me-2"
                                    v-model:checked="data.multipleSelect"
                                    @change="selectAll"
                                />
                                <InputLabel
                                    for="permission-all"
                                    :value="lang().label.check_all"
                                />
                            </div>

                            <div
                                class="form-check form-check-inline col-3"
                                v-for="(permission, index) in props.permissions"
                                :key="index"
                            >
                                <div
                                    class="form-check form-check-custom form-check-solid"
                                >
                                    <input
                                        @change="select"
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        :id="'permission_' + permission.id"
                                        :value="permission.id"
                                        v-model="form.permissions"
                                    />
                                    <InputLabel
                                        :for="'permission_' + permission.id"
                                        :value="permission.name"
                                    />
                                </div>
                            </div>
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
