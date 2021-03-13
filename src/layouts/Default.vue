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
export default {
  components: {
    Navigation,
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
    &.lg {
      padding: 100px 160px;
    }
    &.sm {
      padding: 100px 30px;
    }
  }
}
</style>
