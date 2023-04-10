<script setup>
// import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { onMounted } from 'vue';
import SwitchDarkMode from '@/Components/SwitchDarkMode.vue';
import SwitchLangNavbar from '@/Components/SwitchLangNavbar.vue';
onMounted(() => {
    KTComponents.init();
    KTThemeMode.init();
});
</script>

<template>
    <div class="d-flex flex-column flex-root" id="kt_app_root">
        <!--begin::Authentication - Sign-in -->
        <div class="d-flex flex-column flex-lg-row flex-column-fluid">
            <!--begin::Body-->
            <div
                class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1"
            >
                <!--begin::Form-->
                <div class="d-flex justify-content-end">
                    <SwitchDarkMode />
                </div>
                <div class="d-flex flex-center flex-column align-items-center">
                    <!--begin::Wrapper-->
                    <div class="w-lg-500px p-10">
                        <slot />
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--end::Form-->
                <!--begin::Footer-->
                <div class="d-flex flex-center flex-wrap px-5">
                    <SwitchLangNavbar />

                    <!--begin::Links-->
                    <div class="d-flex fw-semibold text-primary fs-base">
                        <a
                            href="../../demo1/dist/pages/team.html"
                            class="px-5"
                            target="_blank"
                            >{{ lang().label.terms }}</a
                        >
                        <a
                            href="../../demo1/dist/pages/pricing/column.html"
                            class="px-5"
                            target="_blank"
                            >{{ lang().label.plans }}</a
                        >
                        <a
                            href="../../demo1/dist/pages/contact.html"
                            class="px-5"
                            target="_blank"
                            >{{ lang().label.contact }}</a
                        >
                    </div>
                    <!--end::Links-->
                </div>
                <!--end::Footer-->
            </div>
            <!--end::Body-->
        </div>
        <!--end::Authentication - Sign-in-->
    </div>
</template>
