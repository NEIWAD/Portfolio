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
    website
    github
    npm
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
  h1 {
    position: relative;
    width: fit-content;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 8px;
      width: 100%;
      content: "";
      background-color: $yellow;
      z-index: -1;
    }
  }
  .project__left {
    width: calc(100% - 300px);
  }
}
</style>
