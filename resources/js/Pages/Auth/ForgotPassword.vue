<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/vue3';
import AutheticationIllustration from '@/Components/AuntheticationIllustration.vue';

defineProps({
    status: String,
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout>
        <Head :title="lang().label.password_forgot" />

        <!--begin::Heading-->
        <div class="text-center mb-11">
            <AutheticationIllustration type="login" class="w-30 h-auto mb-5" />
            <!--begin::Title-->
            <h1 class="text-dark fw-bolder mb-3">
                {{ lang().label.lost_password }}
            </h1>
            <!--end::Title-->
        </div>
        <!--begin::Heading-->
        <div class="mb-4 text-sm text-muted">
            {{ lang().label.forgot_password }}
        </div>

        <div v-if="status" class="mb-4 fw-medium text-sm">
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="mt-7">
            <div>
                <InputLabel
                    for="email"
                    :value="lang().label.email"
                    class="sr-only"
                />

                <TextInput
                    type="email"
                    v-model="form.email"
                    classes="bg-transparent mb-5"
                    required
                    autofocus
                    autocomplete="username"
                    :placeholder="lang().placeholder.email"
                    :error="form.errors.email"
                />

                <InputError class="my-2" :message="form.errors.email" />
            </div>

            <div class="d-flex align=items-center justify-content-start">
                <PrimaryButton
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    {{
                        form.processing
                            ? lang().button.forgot_password + '...'
                            : lang().button.forgot_password
                    }}
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
