<template>
  <div class="projects" :class="$mq">
    <h1>Projects</h1>
    <Tags
      :tags="$page.tags.edges"
      :selecteds="selecteds"
      @add-tag="addTag"
      @remove-tag="removeTag"
    />
    <div class="projects__list" :class="$mq">
      <Project
        v-for="project in projectsFiltered"
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
        path
        mandate
        tags{
          id
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
      projectsFiltered: [],
      selecteds: [],
    };
  },
  created() {
    this.projectsFiltered = this.$page.projects.edges.map((e) => e.node);
  },
  watch: {
    selecteds: function(val) {
      if (val.length > 0) {
        this.projectsFiltered = this.$page.projects.edges
          .map((e) => e.node)
          .filter((p) => {
            const projectTags = p.tags.map((t) => t.id);
            let isValid = true;
            val.forEach((v) => {
              if (!projectTags.includes(v)) {
                isValid = false;
              }
            });
            return isValid;
          });
      } else {
        this.projectsFiltered = this.$page.projects.edges.map((e) => e.node);
      }
    },
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
.projects__list {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  &.sm {
    grid-template-columns: 1fr;
  }
}
</style>
