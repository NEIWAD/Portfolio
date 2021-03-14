<template>
  <nav class="nav" :class="$mq">
    <div class="nav__left">
      <g-link class="nav__link" to="/">NEIWAD</g-link>
    </div>
    <div class="nav__right" :class="$mq">
      <g-link class="nav__link" to="/about">About</g-link>
      <g-link class="nav__link" to="/projects">Projects</g-link>
      <g-link class="nav__link" to="/blog">Blog</g-link>
      <div
        class="nav__right__burger"
        v-if="$mq === 'sm'"
        @click="menuOpenned = !menuOpenned"
      >
        B
      </div>
    </div>
    <div class="nav__open" v-if="menuOpenned">
      <g-link class="nav__link" to="/about" @click.native="menuOpenned = false"
        >About</g-link
      >
      <g-link
        class="nav__link"
        to="/projects"
        @click.native="menuOpenned = false"
        >Projects</g-link
      >
      <g-link class="nav__link" to="/blog" @click.native="menuOpenned = false"
        >Blog</g-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpenned: false,
    };
  },
  methods: {
    closeMenu() {
      console.log("close");
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: white;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav__left {
    a {
      color: white;
    }
  }
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
  &.md {
    padding-left: 60px;
    padding-right: 60px;
  }
  &.sm {
    background-color: black;
    padding-left: 30px;
    padding-right: 30px;
    .nav__right {
      a {
        color: white;
        display: none;
      }
    }
    .nav__right__burger {
      color: red;
    }
  }
  .nav__open {
    position: fixed;
    top: 60px;
    height: 100%;
    background-color: black;
    left: 0;
    width: 100%;
    a {
      color: white;
    }
  }
}
</style>
