<script setup>
import { Head, router, usePage } from '@inertiajs/vue3';
import { reactive, watch, onMounted, onUnmounted, onUpdated } from 'vue';
import { useModal } from '@/stores/useModal.js';
import pkg from 'lodash';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SelectInput from '@/Components/SelectInput.vue';
import InputSearch from '@/Components/InputSearch.vue';
import DangerButton from '@/Components/DangerButton.vue';
import Pagination from '@/Components/Pagination.vue';
import Checkbox from '@/Components/Checkbox.vue';
import Card from '@/Components/Card.vue';

import Create from '@/Pages/User/Create.vue';
import Edit from '@/Pages/User/Edit.vue';
import Delete from '@/Pages/User/Delete.vue';
import DeleteBulk from '@/Pages/User/DeleteBulk.vue';

const { _, debounce, pickBy } = pkg;
const props = defineProps({
    title: String,
    filters: Object,
    users: Object,
    roles: Object,
    breadcrumbs: Object,
    perPage: Number,
});

const data = reactive({
    params: {
        search: props.filters.search,
        field: props.filters.field,
        order: props.filters.order,
        perPage: props.perPage,
    },
    selectedId: [],
    multipleSelect: false,
    user: null,
    dataSet: usePage().props.app.perpage,
    modal_create: null,
    modal_edit: null,
    modal_delete: null,
    modal_delete_bulk: null,
    createOpen: false,
    editOpen: false,
    deleteOpen: false,
    deleteBulkOpen: false,
});

onMounted(() => {
    data.modal_create = useModal('#modal_create');
    data.modal_edit = useModal('#modal_edit');
    data.modal_delete = useModal('#modal_delete');
    data.modal_delete_bulk = useModal('#modal_delete_bulk');
});

watch(
    () => data.params,
    (newValue, oldValue) => {
        if (
            newValue.field !== oldValue.field ||
            newValue.order !== oldValue.order
        ) {
            console.log("Field atau Order berubah:", newValue)
            nextTick(() => {
                KTMenu.init()
            })
        }
    },
    { deep: true }
)



watch(
    () => _.cloneDeep(data.params),
    debounce(() => {
        let params = pickBy(data.params);
        router.get(route('user.index'), params, {
            replace: true,
            preserveState: true,
            preserveScroll: true,
        });
    }, 150)
);

// Sorting function
const order = (field) => {
    data.params.field = field
    data.params.order = data.params.order === "asc" ? "desc" : "asc"
}

// Select all users
const selectAll = (event) => {
    if (!event.target.checked) {
        data.selectedId = []
    } else {
        data.selectedId = props.users?.data.map((user) => user.id) || []
    }
}

// Check if all users are selected
const select = () => {
    data.multipleSelect = props.users?.data.length === data.selectedId.length
}

// Open a modal
const openModal = (id) => {
    if (data.modals[id]) {
        data.modals[id].show()
        data.modalStates[`${id}Open`] = true
    }
}

// Close a modal
const closeModal = (id) => {
    if (data.modals[id]) {
        data.modals[id].hide()
        data.modalStates[`${id}Open`] = false

        // Reset state for bulk delete modal
        if (id === "deleteBulk") {
            data.multipleSelect = false
            data.selectedId = []
        }
    }
}

// Unmount lifecycle
onUnmounted(() => {
    // Explicitly close all modals
    Object.keys(data.modals).forEach((key) => {
        if (data.modals[key]) {
            data.modals[key].hide()
        }
    })
})
</script>

<template>
    <Head :title="props.title" />

    <AuthenticatedLayout>
        <Breadcrumb :title="title" :breadcrumbs="breadcrumbs" />
        <Card>
            <template #title>
                <div class="d-flex gap-2">
                    <div class="perpage">
                        <SelectInput
                            v-model="data.params.perPage"
                            :dataSet="data.dataSet"
                        />
                    </div>

                    <InputSearch
                        v-model="data.params.search"
                        :placeholder="lang().placeholder.search"
                    />

                    <Create
                        :show="data.createOpen"
                        :roles="props.roles"
                        :title="props.title"
                        @close="closeModal('create')"
                    />
                    <Edit
                        :show="data.editOpen"
                        :user="data.user"
                        :roles="props.roles"
                        :title="props.title"
                        @close="closeModal('edit')"
                    />
                    <Delete
                        :show="data.deleteOpen"
                        :user="data.user"
                        :title="props.title"
                        @close="closeModal('delete')"
                    />
                    <DeleteBulk
                        :show="data.deleteBulkOpen"
                        @close="closeModal('deleteBulk')"
                        :selectedId="data.selectedId"
                        :title="props.title"
                    />
                </div>
            </template>
            <template #toolbar>
                <div class="d-flex justify-content-end gap-2">
                    <DangerButton
                        @click="openModal('deleteBulk')"
                        v-show="
                            data.selectedId.length != 0 && can(['delete user'])
                        "
                    >
                        Delete Selected
                    </DangerButton>

                    <PrimaryButton
                        v-show="
                            data.selectedId.length == 0 && can(['create user'])
                        "
                        @click="openModal('create')"
                    >
                        <i class="fa-thin fa-plus"></i>
                        {{ lang().button.add }} {{ props.title }}
                    </PrimaryButton>
                </div>
            </template>
            <template #body>
                <table
                    class="table align-middle table-row-dashed fs-6 gy-5"
                    d="kt_table_users"
                >
                    <thead>
                        <tr
                            class="text-start text-muted fw-bold fs-7 text-uppercase gs-0"
                        >
                            <th class="w-10px pe-2">
                                <Checkbox
                                    v-model:checked="data.multipleSelect"
                                    @change="selectAll"
                                />
                            </th>
                            <th class="min-w-125px" v-on:click="order('name')">
                                <div class="d-flex gap-2">
                                    <i class="fa-sharp fa-solid fa-sort"></i>
                                    <span>{{ lang().label.name }}</span>
                                </div>
                            </th>
                            <th class="min-w-125px" v-on:click="order('email')">
                                <div class="d-flex gap-2">
                                    <i class="fa-sharp fa-solid fa-sort"></i>
                                    <span>{{ lang().label.email }}</span>
                                </div>
                            </th>
                            <th class="min-w-125px" v-on:click="order('email')">
                                <div class="d-flex gap-2">
                                    <i class="fa-sharp fa-solid fa-sort"></i>
                                    {{ lang().label.role }}
                                </div>
                            </th>
                            <th
                                class="min-w-125px"
                                v-on:click="order('created_at')"
                            >
                                <div class="d-flex gap-2">
                                    <i class="fa-sharp fa-solid fa-sort"></i>
                                    <span>{{ lang().label.created }}</span>
                                </div>
                            </th>
                            <th
                                class="min-w-125px"
                                v-on:click="order('updated_at')"
                            >
                                <div class="d-flex gap-2">
                                    <i class="fa-sharp fa-solid fa-sort"></i>
                                    <span>{{ lang().label.updated }}</span>
                                </div>
                            </th>
                            <th class="text-end min-w-100px">
                                {{ lang().label.action }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 fw-semibold">
                        <tr
                            v-for="(user, index) in users.data"
                            :key="index"
                            class=" "
                        >
                            <td>
                                <div
                                    class="form-check form-check-custom form-check-solid"
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        @change="select"
                                        :value="user.id"
                                        v-model="data.selectedId"
                                    />
                                </div>
                            </td>
                            <td>
                                {{ user.name }}

                                <i
                                    class="fa-solid fa-circle-check text-primary ms-2"
                                    v-show="user.email_verified_at"
                                ></i>
                            </td>
                            <td>
                                {{ user.email }}
                            </td>
                            <td>
                                {{
                                    user.roles.length == 0
                                        ? 'not selected'
                                        : user.roles[0].name
                                }}
                            </td>
                            <td>
                                {{ user.created_at }}
                            </td>
                            <td>
                                {{ user.updated_at }}
                            </td>
                            <td class="text-end">
                                <a
                                    type="button"
                                    class="btn btn-light btn-active-light-primary btn-sm"
                                    data-kt-menu-trigger="hover"
                                    data-kt-menu-placement="bottom-end"
                                    v-show="can(['update user'])"
                                    @click="showMenu"
                                >
                                    {{ lang().label.action }}
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                                    <span class="svg-icon svg-icon-5 m-0">
                                        <svg
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
                                    <!--end::Svg Icon--></a
                                >
                                <!--begin::Menu-->
                                <div
                                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                    data-kt-menu="true"
                                >
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <a
                                            v-show="can(['update user'])"
                                            type="button"
                                            class="menu-link px-3"
                                            @click="
                                                openModal('edit'),
                                                    (data.user = user)
                                            "
                                        >
                                            {{ lang().label.edit }}
                                        </a>
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <a
                                            class="menu-link px-3"
                                            v-show="can(['delete user'])"
                                            type="button"
                                            @click="
                                                openModal('delete'),
                                                    (data.user = user)
                                            "
                                        >
                                            {{ lang().label.delete }}
                                        </a>
                                    </div>
                                    <!--end::Menu item-->
                                </div>
                                <!--end::Menu-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
            <template #footer>
                <Pagination :links="props.users" :filters="data.params" />
            </template>
        </Card>
    </AuthenticatedLayout>
</template>
