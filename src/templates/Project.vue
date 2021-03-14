<template>
  <div class="project" :class="$mq">
    <div class="project__left">
      <h1>{{ $page.project.title }}</h1>
      <p>{{ $page.project.description }}</p>
      <p v-html="$page.project.content"></p>
    </div>
    <Sidebox />
  </div>
</template>
<page-query>
query ($path: String!) {
  project: projects (path: $path) {
    title
    content
    image
    description
    tags{
      id
      name
    }
  }
}
</page-query>

<script>
import Sidebox from "@/components/project/Sidebox";
export default {
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [{ name: "canonical", content: "tetet" }],
    };
  },
  components: {
    Sidebox,
  },
};
</script>

<style lang="scss" scoped>
.project {
  .project__left {
    width: calc(100% - 300px);
  }
}
</style>
