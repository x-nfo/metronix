<script setup>
import { Head, router, usePage } from '@inertiajs/vue3';
import { reactive, watch, onMounted, onUnmounted, onUpdated } from 'vue';
import { useModal } from '@/stores/useModal.js';
import pkg from 'lodash';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SelectInput from '@/Components/SelectInput.vue';
import DangerButton from '@/Components/DangerButton.vue';
import Pagination from '@/Components/Pagination.vue';
import Checkbox from '@/Components/Checkbox.vue';
import Card from '@/Components/Card.vue';
import InputSearch from '@/Components/InputSearch.vue';

import Create from '@/Pages/Role/Create.vue';
import Edit from '@/Pages/Role/Edit.vue';
import Delete from '@/Pages/Role/Delete.vue';
import DeleteBulk from '@/Pages/Role/DeleteBulk.vue';
import Permission from '@/Pages/Role/Permission.vue';

const { _, debounce, pickBy } = pkg;
const props = defineProps({
    title: String,
    filters: Object,
    roles: Object,
    permissions: Object,
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

    role: null,
    dataSet: usePage().props.app.perpage,

    modal_create: null,
    modal_edit: null,
    modal_delete: null,
    modal_delete_bulk: null,
    modal_permission: null,

    createOpen: false,
    editOpen: false,
    deleteOpen: false,
    deleteBulkOpen: false,
    permissionOpen: false,
    selectedId: [],
    multipleSelect: false,
});

onMounted(() => {
    data.modal_create = useModal('#modal_create');
    data.modal_edit = useModal('#modal_edit');
    data.modal_delete = useModal('#modal_delete');
    data.modal_delete_bulk = useModal('#modal_delete_bulk');
    data.modal_permission = useModal('#modal_permission');
});

onUpdated(() => {
    KTMenu.init();
});

const order = (field) => {
    data.params.field = field;
    data.params.order = data.params.order === 'asc' ? 'desc' : 'asc';
};

watch(
    () => _.cloneDeep(data.params),
    debounce(() => {
        let params = pickBy(data.params);
        router.get(route('role.index'), params, {
            replace: true,
            preserveState: true,
            preserveScroll: true,
        });
    }, 150)
);

const selectAll = (event) => {
    if (event.target.checked === false) {
        data.selectedId = [];
    } else {
        props.roles?.data.forEach((role) => {
            data.selectedId.push(role.id);
        });
    }
};
const select = () => {
    if (props.roles?.data.length == data.selectedId.length) {
        data.multipleSelect = true;
    } else {
        data.multipleSelect = false;
    }
};

const openModal = (id) => {
    switch (id) {
        case 'create':
            data.modal_create.show();
            data.createOpen = true;
            break;
        case 'edit':
            data.modal_edit.show();
            data.editOpen = true;
            break;
        case 'delete':
            data.modal_delete.show();
            data.deleteOpen = true;
            break;
        case 'deleteBulk':
            data.modal_delete_bulk.show();
            data.deleteBulkOpen = true;
            break;
        case 'permission':
            data.modal_permission.show();
            data.permissionOpen = true;
            break;
    }
};

const closeModal = (id) => {
    switch (id) {
        case 'create':
            data.modal_create.hide();
            data.createOpen = false;
            break;
        case 'edit':
            data.modal_edit.hide();
            data.editOpen = false;
            break;
        case 'delete':
            data.modal_delete.hide();
            data.deleteOpen = false;
            break;
        case 'deleteBulk':
            data.modal_delete_bulk.hide();
            data.deleteBulkOpen = false;
            data.multipleSelect = false;
            data.selectedId = [];
            break;
        case 'permission':
            data.modal_permission.hide();
            data.permissionOpen = false;
    }
};

onUnmounted(() => {
    closeModal();
});
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
                        @close="closeModal('create')"
                        :permissions="props.permissions"
                        :title="props.title"
                    />
                    <Edit
                        :show="data.editOpen"
                        @close="closeModal('edit')"
                        :role="data.role"
                        :permissions="props.permissions"
                        :title="props.title"
                    />
                    <Delete
                        :show="data.deleteOpen"
                        @close="closeModal('delete')"
                        :role="data.role"
                        :title="props.title"
                    />
                    <DeleteBulk
                        :show="data.deleteBulkOpen"
                        @close="closeModal('deleteBulk')"
                        :selectedId="data.selectedId"
                        :title="props.title"
                    />
                    <Permission
                        :show="data.permissionOpen"
                        @close="closeModal('permission')"
                        :role="data.role"
                        :title="props.title"
                    />
                </div>
            </template>

            <template #toolbar>
                <div class="d-flex justify-content-end gap-2">
                    <DangerButton
                        @click="openModal('deleteBulk')"
                        v-show="
                            data.selectedId.length != 0 && can(['delete role'])
                        "
                    >
                        Delete Selected
                    </DangerButton>

                    <PrimaryButton
                        v-show="
                            data.selectedId.length == 0 && can(['create role'])
                        "
                        class="rounded-none"
                        @click="openModal('create')"
                    >
                        <i class="fa-thin fa-plus"></i>
                        {{ lang().button.add }} {{ props.title }}
                    </PrimaryButton>
                </div>
            </template>

            <template #body>
                <table class="table align-middle table-row-dashed fs-6 gy-5">
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
                                    <span>Guard</span>
                                </div>
                            </th>
                            <th class="px-2 py-4">
                                {{ lang().label.permission }}
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
                        <tr v-for="(role, index) in roles.data" :key="index">
                            <td>
                                <div
                                    class="form-check form-check-custom form-check-solid"
                                >
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        @change="select"
                                        :value="role.id"
                                        v-model="data.selectedId"
                                    />
                                </div>
                            </td>

                            <td>
                                {{ role.name }}
                            </td>
                            <td>
                                {{ role.guard_name }}
                            </td>
                            <td
                                v-if="
                                    role.permissions.length ==
                                    props.permissions.length
                                "
                                @click="
                                    openModal('permission'), (data.role = role)
                                "
                                class="cursor-pointer text-primary fw-semibold"
                            >
                                <span
                                    class="border-bottom border-primary"
                                    data-bs-toggle="tooltip"
                                    data-bs-custom-class="tooltip-inverse"
                                    data-bs-placement="left"
                                    :title="lang().tooltip.detail"
                                >
                                    {{ lang().label.all_permission }}</span
                                >
                            </td>
                            <td
                                v-else-if="role.permissions.length != 0"
                                @click="
                                    openModal('permission'), (data.role = role)
                                "
                                class="cursor-pointer text-primary fw-semibold"
                            >
                                <span
                                    class="border-bottom border-primary"
                                    data-bs-toggle="tooltip"
                                    data-bs-custom-class="tooltip-inverse"
                                    data-bs-placement="left"
                                    :title="lang().tooltip.detail"
                                    >{{ role.permissions.length }}
                                    {{ lang().label.permission }}
                                </span>
                            </td>
                            <td v-else>
                                {{ lang().label.no_permission }}
                            </td>
                            <td>
                                {{ role.created_at }}
                            </td>
                            <td>
                                {{ role.updated_at }}
                            </td>
                            <td class="text-end">
                                <a
                                    type="button"
                                    class="btn btn-light btn-active-light-primary btn-sm"
                                    data-kt-menu-trigger="hover"
                                    data-kt-menu-placement="bottom-end"
                                    v-show="can(['update role'])"
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
                                            v-show="can(['update role'])"
                                            type="button"
                                            class="menu-link px-3"
                                            @click="
                                                openModal('edit'),
                                                    (data.role = role)
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
                                            v-show="can(['delete role'])"
                                            type="button"
                                            @click="
                                                openModal('delete'),
                                                    (data.role = role)
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
                <Pagination :links="props.roles" :filters="data.params" />
            </template>
        </Card>
    </AuthenticatedLayout>
</template>
