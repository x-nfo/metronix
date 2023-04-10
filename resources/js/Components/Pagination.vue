
<script setup>
import { router } from '@inertiajs/vue3';
import { pickBy } from 'lodash';
import { reactive, watchEffect } from 'vue';
import SearchIcon from '@/Components/SearchIcon.vue';

const props = defineProps({
    links: Object,
    filters: Object,
});

const data = reactive({
    params: {
        search: props.filters?.search,
        field: props.filters?.field,
        order: props.filters?.order,
        perPage: props.filters?.perPage,
    },
});

const goto = (link) => {
    let params = pickBy(data.params);
    router.get(link, params, {
        replace: true,
        preserveState: true,
        preserveScroll: true,
    });
};

watchEffect(() => {
    data.params.search = props.filters?.search;
    data.params.field = props.filters?.field;
    data.params.order = props.filters?.order;
    data.params.perPage = props.filters?.perPage;
});
</script>
<template>
    <div class="d-flex justify-content-between align-items-center">
        <div
            class="fs-6 fw-semibold text-gray-700"
            v-if="links.data.length != 0"
        >
            <div class="text-muted">
                {{ lang().label.show }}
                <span class="mx-2">
                    {{ links.from }}
                    -
                    {{ links.to }}
                </span>

                {{ lang().label.of }}

                <span class="ms-2">{{ links.total }}</span>
            </div>
        </div>

        <div v-if="links.links.length > 3">
            <ul class="pagination">
                <li
                    class="page-item"
                    v-for="(link, index) in links.links"
                    :key="index"
                >
                    <a
                        v-on:click="goto(link.url)"
                        class="page-link"
                        :class="{ active: link.active }"
                        v-html="link.label"
                        :disabled="link.url == null"
                    ></a>
                </li>
            </ul>
        </div>
    </div>
    <!-- Begin No Data -->
    <div
        v-if="links.data.length == 0"
        class="d-flex flex-column align-items-center p-6 fs-4"
    >
        <SearchIcon :name="'nodata'" class="mb-3" />
        <p>{{ lang().label.no_data }}</p>
    </div>
    <!-- End No Data -->
</template>
