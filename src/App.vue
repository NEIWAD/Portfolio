<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      meta: [{ name: "canonical", content: "tetet" }],
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
}
h2,
p,
a {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
}
</style>
