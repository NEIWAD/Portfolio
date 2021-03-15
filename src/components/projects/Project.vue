<template>
  <g-link :to="project.path" class="project-card">
    <div class="project-card__title">
      <h2>{{ project.title }}</h2>
      <p class="project-card__title__mandat">
        {{ project.mandate ? project.mandate : "Personnal" }}
      </p>
    </div>
    <div class="project-card__tags" :class="$mq">
      <div
        class="project-card__tags__item"
        v-for="tag in project.tags"
        :key="tag.id"
      >
        <p>{{ tag.name }}</p>
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
  transition-duration: 0.2s;
  .project-card__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    h2 {
      font-size: 30px;
    }
    .project-card__title__mandat {
      font-size: 13px;
      color: #d6d6d6;
      font-style: italic;
      text-transform: uppercase;
    }
  }
  .project-card__tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 15px 0 25px 0;
    .project-card__tags__item {
      background-color: black;
      padding: 4px 8px;
      margin-right: 10px;
      p {
        font-size: 14px;
        color: white;
      }
    }
  }
  &:hover {
    border-left: 6px solid $yellow;
  }
}
</style>
