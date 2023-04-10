<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AutheticationIllustration from '@/Components/AuntheticationIllustration.vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head :title="lang().label.login" />
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <!--begin::Heading-->
        <div class="text-center mb-11">
            <AutheticationIllustration type="login" class="w-30 h-auto mb-5" />
            <!--begin::Title-->
            <h1 class="text-dark fw-bolder mb-3">{{ lang().label.sign_in }}</h1>
            <!--end::Title-->
            <!--begin::Subtitle-->
            <div class="text-gray-500 fw-semibold fs-6">
                {{ lang().label.welcome }} {{ lang().label.to }} Inertia
                Metronix
            </div>
            <!--end::Subtitle=-->
        </div>
        <!--begin::Heading-->

        <form @submit.prevent="submit" class="form w-100" id="kt_sign_in_form">
            <div class="fv-row mb-8">
                <InputLabel
                    for="email"
                    :value="lang().label.email"
                    class="sr-only"
                />
                <TextInput
                    id="email"
                    type="email"
                    v-model="form.email"
                    classes="bg-transparent "
                    required
                    autofocus
                    autocomplete="username"
                    :placeholder="lang().label.email"
                    :error="form.errors.email"
                />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="fv-row mb-3">
                <InputLabel
                    for="password"
                    :value="lang().label.password"
                    class="sr-only"
                />
                <TextInput
                    id="password"
                    type="password"
                    v-model="form.password"
                    classes="bg-transparent"
                    required
                    autocomplete="current-password"
                    :placeholder="lang().placeholder.password"
                    :error="form.errors.password"
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div
                class="d-flex flex-stack flex-wrap mt-8 fs-base fw-semibold mb-8"
            >
                <label class="d-flex align-items-center">
                    <Checkbox
                        name="remember"
                        v-model:checked="form.remember"
                        style="border border-2 border-primary"
                    />
                    <span class="link-primary ms-2">{{
                        lang().label.remember_me
                    }}</span>
                </label>
            </div>
            <div class="d-grid mb-10">
                <PrimaryButton
                    class="btn btn-primary"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    {{
                        form.processing
                            ? lang().button.login + '...'
                            : lang().button.login
                    }}
                </PrimaryButton>
            </div>

            <!-- begin::Lost Password -->
            <div>
                <div class="d-flex justify-content-center">
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="link-primary"
                    >
                        {{ lang().label.lost_password }}
                    </Link>
                </div>
            </div>
            <!-- end::Lost Password -->
        </form>
    </GuestLayout>
</template>
