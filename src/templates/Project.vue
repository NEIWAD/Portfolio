<template>
  <div>
    <router-link to="/projects">back</router-link>
    {{ $page.project }}
  </div>
</template>

<script>
export default {
  name: "Project",
  metaInfo() {
    return {
      title: this.$page.project.seoName,
    };
  },
};
</script>

<page-query>
query ($path: String!) {
  project(path: $path) {
    id
    slug
    name
    seoName
  }
}
</page-query>
