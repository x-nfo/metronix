<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    width: {
        type: String,
        default: 'mw-650px',
        required: false,
    },
});
</script>

<template>
    <teleport to="body">
        <div class="modal fade" tabindex="-1" :id="props.id" aria-hidden="true">
            <div
                class="modal-dialog modal-dialog-centered"
                :class="props.width"
            >
                <div class="modal-content rounded">
                    <div class="modal-header pb-0 border-0">
                        <h2 class="modal-title py-5">
                            <slot name="title" />
                        </h2>

                        <!--begin::Close-->
                        <div
                            class="btn btn-sm btn-icon btn-active-color-primary"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i class="fa-solid fa-x"></i>
                        </div>
                        <!--end::Close-->
                    </div>

                    <div class="modal-body scroll-y px-10 px-lg-15 pb-lg-15">
                        <slot name="body" />
                    </div>

                    <div class="modal-footer border-0 py-5">
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>
