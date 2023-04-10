<script setup>
import Breadcrumb from '@/Components/Breadcrumb.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Card from '@/Components/Card.vue';

import { Head } from '@inertiajs/vue3';

const props = defineProps({
    users: Number,
    roles: Number,
    permissions: Number,
});
</script>

<template>
    <AuthenticatedLayout>
        <Head title="Dashboard" />
        <Breadcrumb :title="'Dashboard'" :breadcrumbs="[]" />
        <div class="d-flex gap-5 px-2">
            <div class="col-4">
                <Card
                    mainClasses="card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end "
                    style="
                        background-color: #f1416c;
                        background-image: url('media/patterns/vector-1.png');
                    "
                >
                    <template #title>
                        <span
                            class="fs-2hx fw-bold me-2 lh-1 ls-n2 text-white"
                            >{{ props.users }}</span
                        >
                        <span
                            class="text-white opacity-75 pt-1 fw-semibold fs-6"
                            >Active Users</span
                        >
                    </template>
                    <template #body></template>
                    <template #footer></template>
                </Card>
            </div>
            <div class="col-4">
                <Card
                    mainClasses="card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end "
                >
                    <template #title>
                        <span class="fs-2hx fw-bold me-2 lh-1 ls-n2">{{
                            props.roles
                        }}</span>
                        <span class="opacity-75 pt-1 fw-semibold fs-6">
                            Roles</span
                        >
                    </template>
                    <template #body></template>
                    <template #footer></template>
                </Card>
            </div>
            <div class="col-4">
                <Card
                    mainClasses="card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end "
                >
                    <template #title>
                        <span class="fs-2hx fw-bold me-2 lh-1 ls-n2">{{
                            props.permissions
                        }}</span>
                        <span class="opacity-75 pt-1 fw-semibold fs-6">
                            Permissions</span
                        >
                    </template>
                    <template #body></template>
                    <template #footer></template>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
