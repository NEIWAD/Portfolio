<template>
  <div class="layout dark:bg-gray-800">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/projects">Projects</g-link>
      </nav>
    </header>
    <slot />
    <footer>Footer</footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.layout {
  min-height: 100vh;
}
</style>
