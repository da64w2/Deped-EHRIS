<template>
  <div class="departments-page">
    <div class="card">
      <h2 class="section-title">Departments</h2>
      <p class="section-desc">Based on tbl_department. Connect to Laravel API later.</p>
      <div class="dept-list">
        <div v-for="dept in departments" :key="dept.id" class="dept-item">
          <span class="dept-name">{{ dept.department_name }}</span>
          <span class="dept-abbrev">{{ dept.department_abbrev }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { buildMockDepartments } from '../data/mockEmployees.js'

const departments = ref([])

onMounted(() => {
  departments.value = buildMockDepartments()
})
</script>

<style scoped>
.departments-page {
  max-width: 720px;
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.section-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.dept-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dept-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: var(--table-header);
  border-radius: 8px;
  border: 1px solid var(--table-border);
}

.dept-name {
  font-weight: 500;
  color: var(--text-primary);
}

.dept-abbrev {
  font-size: 0.8125rem;
  color: var(--text-muted);
  font-weight: 600;
}
</style>
