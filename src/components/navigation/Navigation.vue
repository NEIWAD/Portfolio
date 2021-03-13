<template>
  <nav class="nav" :class="$mq">
    <g-link class="nav__link" to="/">NEIWAD</g-link>
    <div class="nav__right" :class="$mq">
      <g-link class="nav__link" to="/about">About</g-link>
      <g-link class="nav__link" to="/projects">Projects</g-link>
      <g-link class="nav__link" to="/blog">Blog</g-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: white;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav__right {
    a {
      color: black;
    }
    &.lg {
      a {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
  &.lg {
    padding-left: 160px;
    padding-right: 160px;
  }
}
</style>
