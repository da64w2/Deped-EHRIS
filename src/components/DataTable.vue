<template>
  <div class="data-table-wrap">
    <div class="table-toolbar">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input
          v-model="searchLocal"
          type="search"
          placeholder="Search..."
          class="search-input"
          @input="onSearch"
        />
      </div>
      <div class="table-info">
        <span v-if="loading" class="loading-text">Loading...</span>
        <span v-else class="showing-text">
          Showing {{ startRecord }} to {{ endRecord }} of {{ total }} entries
        </span>
      </div>
    </div>
    <div class="table-scroll">
      <table class="data-table">
        <thead>
          <tr>
            <th v-for="col in columns" :key="col.key" :style="{ width: col.width }">
              {{ col.label }}
            </th>
            <th v-if="hasActions" class="th-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading && !rows.length">
            <td :colspan="columns.length + (hasActions ? 1 : 0)" class="td-loading">
              Loading...
            </td>
          </tr>
          <tr v-else-if="!rows.length">
            <td :colspan="columns.length + (hasActions ? 1 : 0)" class="td-empty">
              No data found.
            </td>
          </tr>
          <tr
            v-else
            v-for="(row, idx) in rows"
            :key="rowKey ? row[rowKey] : idx"
            class="data-row"
          >
            <td v-for="col in columns" :key="col.key">
              {{ getCellValue(row, col) }}
            </td>
            <td v-if="hasActions" class="td-actions">
              <slot name="actions" :row="row" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-pagination">
      <button
        type="button"
        class="page-btn"
        :disabled="currentPage <= 1 || loading"
        @click="goToPage(1)"
      >
        First
      </button>
      <button
        type="button"
        class="page-btn"
        :disabled="currentPage <= 1 || loading"
        @click="goToPage(currentPage - 1)"
      >
        Previous
      </button>
      <span class="page-info">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      <button
        type="button"
        class="page-btn"
        :disabled="currentPage >= totalPages || loading"
        @click="goToPage(currentPage + 1)"
      >
        Next
      </button>
      <button
        type="button"
        class="page-btn"
        :disabled="currentPage >= totalPages || loading"
        @click="goToPage(totalPages)"
      >
        Last
      </button>
      <select v-model="pageSizeLocal" class="page-size-select" @change="onPageSizeChange">
        <option :value="10">10</option>
        <option :value="25">25</option>
        <option :value="50">50</option>
        <option :value="100">100</option>
      </select>
      <span class="page-size-label">per page</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, useSlots } from 'vue'

const slots = useSlots()
const hasActions = computed(() => !!slots.actions)

const props = defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, default: () => [] },
  total: { type: Number, default: 0 },
  currentPage: { type: Number, default: 1 },
  pageSize: { type: Number, default: 10 },
  loading: { type: Boolean, default: false },
  rowKey: { type: String, default: '' },
  search: { type: String, default: '' },
})

const emit = defineEmits(['page-change', 'page-size-change', 'search'])

const searchLocal = ref(props.search)
const pageSizeLocal = ref(props.pageSize)


const totalPages = computed(() =>
  props.pageSize > 0 ? Math.max(1, Math.ceil(props.total / props.pageSize)) : 1
)

const startRecord = computed(() =>
  props.total === 0 ? 0 : (props.currentPage - 1) * props.pageSize + 1
)

const endRecord = computed(() =>
  Math.min(props.currentPage * props.pageSize, props.total)
)

function getCellValue(row, col) {
  const val = row[col.key]
  if (col.format === 'date' && val) {
    try {
      return new Date(val).toLocaleDateString()
    } catch {
      return val
    }
  }
  return val ?? '—'
}

function goToPage(page) {
  if (page < 1 || page > totalPages.value) return
  emit('page-change', page)
}

function onPageSizeChange() {
  emit('page-size-change', pageSizeLocal.value)
}

function onSearch() {
  emit('search', searchLocal.value)
}

watch(
  () => props.pageSize,
  (v) => { pageSizeLocal.value = v }
)

watch(
  () => props.search,
  (v) => { searchLocal.value = v }
)
</script>

<style scoped>
.data-table-wrap {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.table-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--table-border);
  gap: 1rem;
  flex-wrap: wrap;
}

.search-box {
  display: flex;
  align-items: center;
  background: var(--body-bg);
  border: 1px solid var(--table-border);
  border-radius: 8px;
  padding: 0 0.75rem;
  min-width: 220px;
}

.search-icon {
  margin-right: 0.5rem;
  opacity: 0.6;
  font-size: 0.875rem;
}

.search-input {
  border: none;
  background: none;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  width: 100%;
  outline: none;
}

.search-input::placeholder {
  color: var(--text-muted);
}

.table-info {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.loading-text {
  color: var(--accent);
}

.table-scroll {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.data-table th {
  text-align: left;
  padding: 0.75rem 1rem;
  background: var(--table-header);
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--table-border);
  white-space: nowrap;
}

.data-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--table-border);
  color: var(--text-primary);
}

.data-row:hover {
  background: var(--table-hover);
}

.td-loading,
.td-empty {
  text-align: center;
  padding: 2rem !important;
  color: var(--text-muted);
}

.th-actions,
.td-actions {
  width: 120px;
  text-align: right;
}

.table-pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid var(--table-border);
  flex-wrap: wrap;
}

.page-btn {
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--table-border);
  background: var(--card-bg);
  border-radius: 6px;
  font-size: 0.8125rem;
  color: var(--text-primary);
}

.page-btn:hover:not(:disabled) {
  background: var(--table-hover);
  border-color: var(--accent);
  color: var(--accent);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.8125rem;
  color: var(--text-muted);
  margin: 0 0.25rem;
}

.page-size-select {
  margin-left: 0.5rem;
  padding: 0.4rem 0.5rem;
  border: 1px solid var(--table-border);
  border-radius: 6px;
  font-size: 0.8125rem;
  background: var(--card-bg);
  color: var(--text-primary);
}

.page-size-label {
  font-size: 0.8125rem;
  color: var(--text-muted);
}
</style>
