<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { usePage } from '@inertiajs/vue3';
import Header from '@/Layouts/partials/Header.vue';
import Sidebar from '@/Layouts/partials/Sidebar.vue';
import Footer from '@/Layouts/partials/Footer.vue';

const sidebar = ref(null);
const emit = defineEmits(['close', 'open']);

onMounted(() => {
    KTComponents.init();
    KTThemeMode.init();
});


watchEffect(() => {
    let flash = usePage().props.flash;

    if (flash.success) {
        Swal.fire({
            html: flash.success,
            icon: 'success',
            timer: 2000,
            buttonsStyling: false,
            confirmButtonText: 'Ok, got it!',
            customClass: {
                confirmButton: 'btn btn-primary',
            },
        });
    }

    if (flash.error) {
        Swal.fire({
            html: flash.error,
            icon: 'error',
            buttonsStyling: false,
            timer: 2000,
            confirmButtonText: 'Ok, got it!',
            customClass: {
                confirmButton: 'btn btn-danger',
            },
        });
    }
});

</script>

<template>
    <!--begin::App-->
    <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
        <!--begin::Page-->
        <div
            class="app-page flex-column flex-column-fluid vh-100"
            id="kt_app_page"
        >
            <!--layout-partial:layout/partials/_header.html-->
            <Header />
            <!--begin::Wrapper-->
            <div
                class="app-wrapper flex-column flex-row-fluid"
                id="kt_app_wrapper"
            >
                <Sidebar />
                <!--begin::Main-->
                <div
                    class="app-main flex-column flex-row-fluid"
                    id="kt_app_main"
                >
                    <!--begin::Content wrapper-->
                    <div class="d-flex flex-column flex-column-fluid">
                        <!-- <Toolbar /> -->

                        <!--begin::Content-->
                        <div
                            id="kt_app_content"
                            class="app-content flex-column-fluid"
                        >
                            <!--begin::Content container-->
                            <div
                                id="kt_app_content_container"
                                class="app-container container-xxl"
                            >
                                <slot />
                            </div>
                        </div>
                    </div>
                    <!--end::Content wrapper-->
                    <Footer />
                </div>
                <!--end:::Main-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
    <!--end::App-->
    <!--layout-partial:partials/_drawers.html-->
</template>

<style lang="scss">
@import '@fortawesome/fontawesome-free/css/all.min.css';
</style>
