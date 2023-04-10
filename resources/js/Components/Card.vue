<script setup>
const props = defineProps([
    'mainClasses',
    'headerClasses',
    'bodyClasses',
    'footerClasses',
]);
</script>
<template>
    <div class="card shadow-sm" :class="mainClasses">
        <div class="card-header border-0 pt-6" :class="headerClasses">
            <h3 class="card-title">
                <slot name="title" />
            </h3>
            <div class="card-toolbar">
                <slot name="toolbar" />
            </div>
        </div>
        <div class="card-body" :class="bodyClasses">
            <slot name="body" />
        </div>
        <div class="card-footer border-0" :class="footerClasses">
            <slot name="footer" />
        </div>
    </div>
</template>
