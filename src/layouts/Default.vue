<template>
  <div class="layout">
    <Navigation />
    <div class="layout__content" :class="$mq">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.layout {
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .layout__content {
    min-height: 100vh;
    &.lg {
      padding: 100px 160px;
    }
    &.md {
      padding: 80px 60px;
    }
    &.sm {
      padding: 100px 30px;
    }
  }
}
</style>
