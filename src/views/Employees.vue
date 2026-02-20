<template>
  <div class="employees-page">
    <DataTable
      :columns="columns"
      :rows="rows"
      :total="total"
      :current-page="currentPage"
      :page-size="pageSize"
      :loading="loading"
      row-key="id"
      :search="search"
      @page-change="onPageChange"
      @page-size-change="onPageSizeChange"
      @search="onSearch"
    >
      <template #actions="{ row }">
        <button type="button" class="btn-sm btn-view" @click="viewEmployee(row)">View</button>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataTable from '../components/DataTable.vue'
import { fetchEmployeePage } from '../data/mockEmployees.js'

const columns = [
  { key: 'employee_id', label: 'Employee ID', width: '110px' },
  { key: 'fullname', label: 'Full Name', width: '200px' },
  { key: 'email', label: 'Email', width: '220px' },
  { key: 'job_title', label: 'Job Title', width: '200px' },
  { key: 'department_name', label: 'Department', width: '180px' },
  { key: 'employ_status', label: 'Status', width: '100px' },
  { key: 'date_of_joining', label: 'Date Joined', width: '120px', format: 'date' },
]

const rows = ref([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const search = ref('')

function loadPage() {
  loading.value = true
  fetchEmployeePage({
    page: currentPage.value,
    pageSize: pageSize.value,
    search: search.value,
  })
    .then(({ rows: r, total: t }) => {
      rows.value = r
      total.value = t
    })
    .finally(() => {
      loading.value = false
    })
}

function onPageChange(page) {
  currentPage.value = page
  loadPage()
}

function onPageSizeChange(size) {
  pageSize.value = size
  currentPage.value = 1
  loadPage()
}

function onSearch(q) {
  search.value = q
  currentPage.value = 1
  loadPage()
}

function viewEmployee(row) {
  alert(`View employee: ${row.fullname} (ID: ${row.employee_id})`)
}

onMounted(loadPage)
</script>

<style scoped>
.employees-page {
  width: 100%;
}

.btn-sm {
  padding: 0.35rem 0.65rem;
  border-radius: 6px;
  font-size: 0.8125rem;
  border: none;
}

.btn-view {
  background: var(--accent);
  color: #fff;
}

.btn-view:hover {
  background: var(--accent-hover);
}
</style>
