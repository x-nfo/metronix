<script setup>
import { onMounted } from 'vue';
import SwitchDarkMode from '@/Components/SwitchDarkMode.vue';

onMounted(() => {
    KTMenu.init();
});
</script>

<template>
    <!--begin::Navbar-->
    <div class="app-navbar flex-shrink-0">
        <!--begin::Theme mode-->
        <SwitchDarkMode />
        <!--end::Theme mode-->
        <!--begin::User menu-->
        <div
            class="app-navbar-item ms-1 ms-md-3"
            id="kt_header_user_menu_toggle"
        >
            <!--begin::Menu wrapper-->
            <div
                class="cursor-pointer symbol symbol-30px symbol-md-40px"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
            >
                <img src="media/avatars/300-1.jpg" alt="user" />
            </div>
            <!--layout-partial:partials/menus/_user-account-menu.html-->
            <!--end::Menu wrapper-->
        </div>
        <!--end::User menu-->
        <!--begin::Header menu toggle-->
        <div
            class="app-navbar-item d-lg-none ms-2 me-n3"
            title="Show header menu"
        >
            <div
                class="btn btn-icon btn-active-color-primary w-30px h-30px w-md-35px h-md-35px"
                id="kt_app_header_menu_toggle"
            >
                <!--begin::Svg Icon | path: icons/duotune/text/txt001.svg-->
                <span class="svg-icon svg-icon-2 svg-icon-md-1"
                    ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z"
                            fill="currentColor"
                        />
                        <path
                            opacity="0.3"
                            d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z"
                            fill="currentColor"
                        />
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </div>
        </div>
        <!--end::Header menu toggle-->
    </div>
    <!--end::Navbar-->
</template>
