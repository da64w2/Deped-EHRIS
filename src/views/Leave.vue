<template>
  <div class="leave-page">
    <div class="card">
      <h2 class="section-title">Leave Management</h2>
      <p class="section-desc">Based on tbl_request_leave / tbl_addleave. Connect to Laravel API later.</p>
      <div class="placeholder-box">
        <span class="placeholder-icon">📅</span>
        <p>Leave requests and balances will be loaded from API.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.leave-page {
  max-width: 640px;
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

.placeholder-box {
  text-align: center;
  padding: 2rem;
  background: var(--table-header);
  border-radius: 8px;
  border: 1px dashed var(--table-border);
  color: var(--text-muted);
  font-size: 0.9375rem;
}

.placeholder-icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}
</style>
