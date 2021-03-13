<template>
  <g-link :to="project.path" class="project-card">
    <div class="project-card__title">
      <h2>{{ project.title }}</h2>
      <div class="project-card__title__tags">
        {{ project.tags }}
      </div>
    </div>
    <div class="project-card__description">
      {{ project.description }}
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  box-sizing: border-box;
  padding-left: 20px;
  background-color: white;
  border-left: 6px solid black;
  .project-card__title {
    font-size: 30px;
  }
}
</style>
