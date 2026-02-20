<template>
  <div class="app-layout">
    <!-- Light sidebar (design.png style) -->
    <aside class="sidebar">
      <div class="sidebar-brand">
        <span class="logo-text">DepED Ozamiz</span>
      </div>
      <div class="company-section">
        <label class="company-label">Company name</label>
        <div class="company-select">
          <span class="company-value">DepED Ozamiz</span>
          <span class="company-arrow">▼</span>
        </div>
      </div>
      <nav class="sidebar-nav">
        <router-link to="/dashboard" class="nav-item" active-class="active">
          <span class="nav-icon">▣</span>
          <span class="nav-text">Dashboard</span>
        </router-link>
        <router-link to="/employees" class="nav-item" active-class="active">
          <span class="nav-icon">👥</span>
          <span class="nav-text">Employee Management</span>
        </router-link>
        <router-link to="/cot-rpms" class="nav-item" active-class="active">
          <span class="nav-icon">📈</span>
          <span class="nav-text">COT-RPMS Summary</span>
        </router-link>
        <router-link to="/sat-summary" class="nav-item" active-class="active">
          <span class="nav-icon">📈</span>
          <span class="nav-text">SAT-Summary</span>
        </router-link>
        <router-link to="/self-service" class="nav-item" active-class="active">
          <span class="nav-icon">✎</span>
          <span class="nav-text">Self-Service</span>
        </router-link>
        <router-link to="/request-status" class="nav-item" active-class="active">
          <span class="nav-icon">📄</span>
          <span class="nav-text">Request Status</span>
        </router-link>
        <router-link to="/my-details" class="nav-item" active-class="active">
          <span class="nav-icon">📄</span>
          <span class="nav-text">My Details</span>
        </router-link>
        <router-link to="/utilities" class="nav-item" active-class="active">
          <span class="nav-icon">⚙</span>
          <span class="nav-text">Utilities</span>
        </router-link>
        <router-link to="/survey" class="nav-item" active-class="active">
          <span class="nav-icon">⚙</span>
          <span class="nav-text">Survey</span>
        </router-link>
      </nav>
      <div class="sidebar-footer">
        <router-link to="/" class="nav-item logout-item">
          <span class="nav-icon">↗</span>
          <span class="nav-text">Logout</span>
        </router-link>
      </div>
    </aside>

    <!-- Main content area -->
    <div class="main-wrap">
      <!-- Content header: title + breadcrumb left, user right -->
      <header class="content-header">
        <div class="header-left">
          <h1 class="content-title">{{ pageTitle }}</h1>
          <div class="breadcrumbs" v-if="breadcrumb.length">
            <template v-for="(part, i) in breadcrumb" :key="i">
              <router-link v-if="i < breadcrumb.length - 1" :to="breadcrumbLink(i)" class="bread-link">{{ part }}</router-link>
              <span v-else class="bread-current">{{ part }}</span>
              <span v-if="i < breadcrumb.length - 1" class="bread-sep">/</span>
            </template>
          </div>
        </div>
        <div class="header-user">
          <div class="header-avatar">G</div>
          <div class="header-user-info">
            <span class="header-user-name">Gavino O. Tan</span>
            <span class="header-user-role">Super admin</span>
          </div>
          <span class="header-chevron">▼</span>
        </div>
      </header>

      <main class="main">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageTitle = computed(() => route.meta?.title || 'eHRIS')
const breadcrumb = computed(() => route.meta?.breadcrumb || [])

function breadcrumbLink(index) {
  const paths = ['/', '/dashboard', '/employees', '/my-details', '/departments', '/leave']
  const crumbs = breadcrumb.value
  if (index === 0) return '/'
  if (crumbs[index] === 'Dashboard') return '/dashboard'
  if (crumbs[index] === 'My Details') return '/my-details'
  if (crumbs[index] === 'Employees') return '/employees'
  return '/'
}
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
}

.sidebar {
  width: 260px;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--sidebar-border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
}

.sidebar-brand {
  padding: 1.25rem 1rem;
  border-bottom: 1px solid var(--sidebar-border);
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--sidebar-active-text);
  letter-spacing: -0.02em;
}

.company-section {
  padding: 1rem;
}

.company-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--sidebar-text);
  margin-bottom: 0.35rem;
  text-transform: none;
}

.company-select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background: var(--table-header);
  border: 1px solid var(--table-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--sidebar-text-dark);
}

.company-value {
  flex: 1;
}

.company-arrow {
  font-size: 0.65rem;
  color: var(--sidebar-text);
}

.sidebar-nav {
  flex: 1;
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  color: var(--sidebar-text-dark);
  font-size: 0.9rem;
  transition: background 0.15s, color 0.15s;
}

.nav-item:hover {
  background: var(--table-hover);
  color: var(--sidebar-active-text);
}

.nav-item.active {
  background: var(--sidebar-active-bg);
  color: var(--sidebar-active-text);
  font-weight: 500;
}

.nav-icon {
  font-size: 1.1rem;
  width: 1.25rem;
  text-align: center;
  opacity: 0.85;
}

.nav-text {
  flex: 1;
}

.sidebar-footer {
  padding: 0.75rem;
  border-top: 1px solid var(--sidebar-border);
}

.logout-item {
  color: var(--sidebar-text);
}

.logout-item .nav-icon {
  font-size: 1rem;
}

.main-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--body-bg);
}

.content-header {
  background: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.content-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.breadcrumbs {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.bread-link {
  color: var(--link-blue);
}

.bread-link:hover {
  text-decoration: underline;
}

.bread-sep {
  margin: 0 0.35rem;
  color: var(--text-muted);
}

.bread-current {
  color: var(--text-muted);
}

.header-user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.header-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--sidebar-active-bg);
  color: var(--sidebar-active-text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
}

.header-user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.header-user-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}

.header-user-role {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.header-chevron {
  font-size: 0.6rem;
  color: var(--text-muted);
}

.main {
  flex: 1;
  padding: 1.25rem 1.5rem;
  overflow: auto;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
