<script setup>
import { Link } from '@inertiajs/vue3';
import { onMounted } from 'vue';

onMounted(() => {
    KTMenu.init();
});
</script>
<template>
    <!--begin::sidebar menu-->
    <div class="app-sidebar-menu overflow-hidden flex-column-fluid">
        <!--begin::Menu wrapper-->
        <div
            id="kt_app_sidebar_menu_wrapper"
            class="app-sidebar-wrapper hover-scroll-overlay-y my-5"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
            data-kt-scroll-wrappers="#kt_app_sidebar_menu"
            data-kt-scroll-offset="5px"
            data-kt-scroll-save-state="true"
        >
            <!--begin::Menu-->
            <div
                class="menu menu-column menu-rounded menu-sub-indention px-3"
                id="#kt_app_sidebar_menu"
                data-kt-menu="true"
                data-kt-menu-expand="false"
            >
                <!--begin:Menu item-->
                <div
                    data-kt-menu-trigger="click"
                    class="menu-item menu-accordion"
                    :class="{ 'here active': route().current('dashboard') }"
                >
                    <!--begin:Menu link--><Link
                        :href="route('dashboard')"
                        class="menu-link"
                        ><span class="menu-icon"
                            ><!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                            <span class="svg-icon svg-icon-2"
                                ><svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="9"
                                        height="9"
                                        rx="2"
                                        fill="currentColor"
                                    />
                                    <rect
                                        opacity="0.3"
                                        x="13"
                                        y="2"
                                        width="9"
                                        height="9"
                                        rx="2"
                                        fill="currentColor"
                                    />
                                    <rect
                                        opacity="0.3"
                                        x="13"
                                        y="13"
                                        width="9"
                                        height="9"
                                        rx="2"
                                        fill="currentColor"
                                    />
                                    <rect
                                        opacity="0.3"
                                        x="2"
                                        y="13"
                                        width="9"
                                        height="9"
                                        rx="2"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <!--end::Svg Icon--></span
                        ><span class="menu-title">Dashboard</span></Link
                    ><!--end:Menu link--><!--begin:Menu sub-->
                </div>
                <div class="menu-item pt-5">
                    <!--begin:Menu content-->
                    <div class="menu-content">
                        <span class="menu-heading fw-bold text-uppercase fs-7"
                            >Management</span
                        >
                    </div>
                    <!--end:Menu content-->
                </div>
                <!--end:Menu item-->

                <!--begin:Menu item-->
                <div
                    data-kt-menu-trigger="click"
                    class="menu-item menu-accordion"
                    :class="
                        route().current('user.index')
                            ? 'show'
                            : route().current('role.index')
                            ? 'show'
                            : route().current('permission.index')
                            ? 'show'
                            : ''
                    "
                >
                    <!--begin:Menu link-->
                    <span class="menu-link"
                        ><span class="menu-icon"
                            ><!--begin::Svg Icon | path: icons/duotune/abstract/abs029.svg-->
                            <span class="svg-icon svg-icon-2"
                                ><svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        opacity="0.3"
                                        d="M13 6.5C13 4 15 2 17.5 2C20 2 22 4 22 6.5C22 9 20 11 17.5 11C15 11 13 9 13 6.5ZM6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22ZM17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <!--end::Svg Icon--></span
                        ><span class="menu-title">User Management</span
                        ><span class="menu-arrow"></span></span
                    ><!--end:Menu link--><!--begin:Menu sub-->
                    <div class="menu-sub menu-sub-accordion">
                        <!--begin:Menu item-->
                        <div
                            data-kt-menu-trigger="click"
                            class="menu-item menu-accordion mb-1"
                        >
                            <!--begin:Menu link--><Link
                                :href="route('user.index')"
                                class="menu-link"
                                :class="{
                                    active: route().current('user.index'),
                                }"
                                ><span class="menu-bullet"
                                    ><span
                                        class="bullet bullet-dot"
                                    ></span></span
                                ><span class="menu-title">Users</span></Link
                            ><!--end:Menu link--><!--begin:Menu sub-->
                        </div>
                        <!--end:Menu item-->
                        <!--begin:Menu item-->
                        <div
                            data-kt-menu-trigger="click"
                            class="menu-item menu-accordion mb-1"
                        >
                            <!--begin:Menu link--><Link
                                :href="route('role.index')"
                                class="menu-link"
                                :class="{
                                    active: route().current('role.index'),
                                }"
                                ><span class="menu-bullet"
                                    ><span
                                        class="bullet bullet-dot"
                                    ></span></span
                                ><span class="menu-title">Roles</span></Link
                            ><!--end:Menu link--><!--begin:Menu sub-->
                        </div>
                        <!--end:Menu item-->
                        <!--begin:Menu item-->
                        <div
                            data-kt-menu-trigger="click"
                            class="menu-item menu-accordion mb-1"
                        >
                            <!--begin:Menu link--><Link
                                :href="route('permission.index')"
                                class="menu-link"
                                :class="{
                                    active: route().current('permission.index'),
                                }"
                                ><span class="menu-bullet"
                                    ><span
                                        class="bullet bullet-dot"
                                    ></span></span
                                ><span class="menu-title"
                                    >Permissions</span
                                ></Link
                            ><!--end:Menu link--><!--begin:Menu sub-->
                        </div>
                        <!--end:Menu item-->
                    </div>
                    <!--end:Menu sub-->
                </div>
                <!--end:Menu item-->

                <div class="menu-item pt-5">
                    <!--begin:Menu content-->
                    <div class="menu-content">
                        <span class="menu-heading fw-bold text-uppercase fs-7"
                            >EXIT</span
                        >
                    </div>
                    <!--end:Menu content-->
                </div>
                <!--end:Menu item-->

                <!--begin:Menu item-->
                <div
                    data-kt-menu-trigger="click"
                    class="menu-item menu-accordion"
                >
                    <!--begin:Menu link--><Link
                        :href="route('logout')"
                        method="post"
                        as="link"
                        class="menu-link"
                    >
                        <span class="menu-icon"
                            ><!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        opacity="0.3"
                                        d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                            <!--end::Svg Icon--></span
                        ><span class="menu-title"
                            >{{ lang().label.logout }}
                        </span> </Link
                    ><!--end:Menu link--><!--begin:Menu sub-->
                </div>
                <!--begin:Menu item-->
            </div>
            <!--end::Menu-->
        </div>
        <!--end::Menu wrapper-->
    </div>
    <!--end::sidebar menu-->
</template>
