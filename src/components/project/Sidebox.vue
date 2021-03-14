<template>
  <div class="project__right">
    <div class="project__right__item">
      <h3>Tech</h3>
      <div class="project__right__tags">
        <div
          class="project__right__tags__item"
          v-for="tag in $page.project.tags"
          :key="tag.id"
        >
          {{ tag.name }}
        </div>
      </div>
    </div>
    <div class="project__right__item">
      <h3>Links</h3>
      <div class="project__right__item__links">
        <g-link
          v-if="$page.project.website"
          :to="$page.project.website"
          class="project__right__item__links__item"
        >
          Website
        </g-link>
        <g-link
          v-if="$page.project.github"
          :to="$page.project.github"
          class="project__right__item__links__item"
        >
          Github
        </g-link>
        <g-link
          v-if="$page.project.npm"
          :to="$page.project.npm"
          class="project__right__item__links__item"
        >
          NPM
        </g-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project__right {
  position: fixed;
  top: 100px;
  width: 250px;
  right: 160px;
  border: 6px solid black;
  background-color: $yellow;
  box-sizing: border-box;
  padding: 10px;
  .project__right__item {
    margin-bottom: 20px;
    h3 {
      width: 100%;
      display: block;
      color: black;
      margin-bottom: 10px;
      font-weight: 900;
    }
  }
  .project__right__tags {
    display: flex;
    flex-wrap: wrap;
    .project__right__tags__item {
      background-color: white;
      color: black;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 4px 8px;
      font-size: 14px;
    }
  }
  .project__right__item__links {
    display: flex;
    flex-direction: column;
    .project__right__item__links__item {
      color: white;
    }
  }
}
</style>
