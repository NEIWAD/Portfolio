<template>
  <nav class="nav" :class="$mq">
    <div class="nav__left">
      <g-link class="nav__link" to="/">NEIWAD</g-link>
    </div>
    <div class="nav__right" :class="$mq">
      <g-link class="nav__link" to="/about" data-content="About">About</g-link>
      <g-link class="nav__link" to="/projects" data-content="Projects"
        >Projects</g-link
      >
      <g-link class="nav__link" to="/blog" data-content="Blog">Blog</g-link>
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
  background-color: black;
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
      color: white;
      position: relative;
      padding: 10px 10px;
      &::before {
        position: absolute;
        content: attr(data-content);
        color: black;
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        transition: clip-path 0.3s ease;
      }
      &::after {
        content: "";
        height: 26px;
        width: 0px;
        background-color: rgb(255, 238, 0);
        position: absolute;
        left: 0;
        transition: width 0.3s ease;
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);
      }

      &:hover {
        &::before {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        &::after {
          width: 100%;
        }
      }
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
