<script setup>
import { onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
const lang = usePage().props.locale;

// onMounted(() => {
//     KTComponents.init();
// });
</script>

<template>
    <!--begin::Languages-->
    <div class="me-10">
        <!--begin::Toggle-->
        <button
            class="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-start"
            data-kt-menu-offset="0px, 0px"
        >
            <div v-if="lang == 'en'">
                <img
                    data-kt-element="current-lang-flag"
                    class="w-20px h-20px rounded me-3"
                    src="/media/flags/united-states.svg"
                    alt=""
                />

                <span data-kt-element="current-lang-name" class="me-1"
                    >English</span
                >
            </div>
            <div v-if="lang == 'id'">
                <img
                    data-kt-element="current-lang-flag"
                    class="w-20px h-20px rounded me-3"
                    src="/media/flags/indonesia.svg"
                    alt=""
                />

                <span data-kt-element="current-lang-name" class="me-1"
                    >Indonesia</span
                >
            </div>

            <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
            <span class="svg-icon svg-icon-5 svg-icon-muted rotate-180 m-0"
                ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                        fill="currentColor"
                    />
                </svg>
            </span>
            <!--end::Svg Icon-->
        </button>

        <!--begin::Menu-->
        <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7"
            data-kt-menu="true"
            id="kt_auth_lang_menu"
        >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <Link
                    :href="route('setlang', 'en')"
                    class="menu-link d-flex px-5"
                    data-kt-lang="English"
                >
                    <span class="symbol symbol-20px me-4">
                        <img
                            data-kt-element="lang-flag"
                            class="rounded-1"
                            src="/media/flags/united-states.svg"
                            alt=""
                        />
                    </span>
                    <span data-kt-element="lang-name">English</span>
                </Link>
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
                <Link
                    :href="route('setlang', 'id')"
                    class="menu-link d-flex px-5"
                    data-kt-lang="Spanish"
                >
                    <span class="symbol symbol-20px me-4">
                        <img
                            data-kt-element="lang-flag"
                            class="rounded-1"
                            src="/media/flags/indonesia.svg"
                            alt=""
                        />
                    </span>
                    <span data-kt-element="lang-name">Indonesia</span>
                </Link>
            </div>
            <!--end::Menu item-->
        </div>
        <!--end::Menu-->
    </div>
    <!--end::Languages-->
</template>
