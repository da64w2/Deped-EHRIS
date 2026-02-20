<template>
  <div class="dashboard">
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-icon">👥</span>
        <div class="stat-content">
          <span class="stat-value">{{ stats.employees }}</span>
          <span class="stat-label">Total Employees</span>
        </div>
      </div>
      <div class="stat-card">
        <span class="stat-icon">🏢</span>
        <div class="stat-content">
          <span class="stat-value">{{ stats.departments }}</span>
          <span class="stat-label">Departments</span>
        </div>
      </div>
      <div class="stat-card">
        <span class="stat-icon">📅</span>
        <div class="stat-content">
          <span class="stat-value">{{ stats.leavePending }}</span>
          <span class="stat-label">Leave Requests (Pending)</span>
        </div>
      </div>
    </div>
    <div class="card recent-section">
      <h2 class="section-title">Quick links</h2>
      <div class="quick-links">
        <router-link to="/employees" class="quick-link">View Employees →</router-link>
        <router-link to="/departments" class="quick-link">Departments →</router-link>
        <router-link to="/leave" class="quick-link">Leave Management →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const stats = reactive({
  employees: 500,
  departments: 5,
  leavePending: 12,
})
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.stat-icon {
  font-size: 2rem;
  opacity: 0.9;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.recent-section {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.quick-link {
  color: var(--accent);
  font-size: 0.9375rem;
  padding: 0.5rem 0;
}

.quick-link:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}
</style>
