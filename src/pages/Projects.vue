<template>
  <div>
    <h1>Projects</h1>
    <div>
      <g-link
        :to="edge.node.path"
        v-for="edge in $page.project.edges"
        :key="edge.node.name"
      >
        <h2>{{ edge.node }}</h2>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  metaInfo() {
    return {
      title: "Projects",
    };
  },
};
</script>

<page-query>
query {
  project: allProject {
    edges {
      node {
        id
        path
        slug
        name
        startDate
        endDate
      }
    }
  }
}
</page-query>
