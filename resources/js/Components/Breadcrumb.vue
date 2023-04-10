<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    title: String,
    breadcrumbs: Object,
});
</script>

<template>
    <div class="d-flex justify-content-between py-10 px-2">
        <!--begin::Toolbar container-->
        <div class="px-0">
            <!--begin::Page title-->
            <div
                class="page-title d-flex flex-column justify-content-center flex-wrap me-3"
            >
                <!--begin::Title-->
                <h1
                    class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0"
                >
                    {{ title }}
                </h1>
                <!--end::Title-->

                <!--begin::Breadcrumb-->
            </div>
            <!--end::Page title-->
            <!--begin::Actions-->
            <!--end::Actions-->
        </div>

        <div class="">
            <ul
                class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
            >
                <li class="breadcrumb-item text-muted">
                    <Link
                        :href="route('dashboard')"
                        class="text-muted text-hover-primary"
                    >
                        {{ lang().label.dashboard }}
                    </Link>
                </li>
                <!--begin::Item-->
                <li class="breadcrumb-item" v-show="breadcrumbs.length != 0">
                    <span class="bullet bg-gray-400 w-5px h-2px"></span>
                </li>
                <!--end::Item-->
                <!--begin::Item-->
                <li
                    v-for="(breadcrumb, index) in breadcrumbs"
                    :key="index"
                    class="breadcrumb-item text-muted"
                >
                    <Link :href="breadcrumb.href">
                        {{ breadcrumb.label }}
                    </Link>
                </li>
                <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
        </div>
        <!--end::Toolbar container-->
    </div>
    <!--end::Toolbar-->
</template>
