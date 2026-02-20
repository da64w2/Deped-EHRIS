<template>
  <div class="placeholder-page">
    <h1 class="placeholder-title">{{ $route.meta?.title || 'Page' }}</h1>
    <p class="placeholder-desc">This page will be implemented later.</p>
  </div>
</template>

<style scoped>
.placeholder-page { padding: 1rem 0; }
.placeholder-title { font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary); }
.placeholder-desc { font-size: 0.9375rem; color: var(--text-muted); }
</style>
