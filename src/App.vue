<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
export default {
  mounted() {
    document.documentElement.classList.add("dark");
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
</style>
