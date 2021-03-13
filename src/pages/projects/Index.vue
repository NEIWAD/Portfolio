<template>
  <div class="projects">
    <h1>Projects</h1>
    <Tags
      :tags="$page.tags.edges"
      :selecteds="selecteds"
      @add-tag="addTag"
      @remove-tag="removeTag"
    />
    <div class="projects__list">
      <Project
        v-for="project in $page.projects.edges.map((e) => e.node)"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>
<page-query>
query {
  projects: allProjects {
    edges {
      node {
        title
        description
        tags{
          name
        }
      }
    }
  }
  tags: allProjectTags{
    edges{
      node{
        id
        name
      }
    }
  }
}
</page-query>
<script>
import Tags from "@/components/projects/Tags";
import Project from "@/components/projects/Project";
export default {
  metaInfo: {
    title: "Projects",
    meta: [{ name: "canonical", content: "tetet" }],
  },
  components: {
    Tags,
    Project,
  },
  data() {
    return {
      selecteds: [],
    };
  },
  methods: {
    addTag(id) {
      this.selecteds.push(id);
    },
    removeTag(id) {
      this.selecteds = this.selecteds.filter((i) => i !== id);
    },
  },
};
</script>

<style lang="scss" scoped>
.projects__list {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
}
</style>
