<template>
  <div class="tags" :class="$mq">
    <div class="tags-list" :class="$mq">
      <div
        class="tags-list__item"
        v-for="tag in tags.map((t) => t.node)"
        :key="tag.id"
        :class="selecteds.includes(tag.id) ? 'selected' : ''"
        @click="clickOnTag(tag)"
      >
        <p>{{ tag.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
    },
    selecteds: {
      type: Array,
    },
  },
  methods: {
    clickOnTag(tag) {
      if (this.selecteds.indexOf(tag.id) !== -1) {
        this.$emit("remove-tag", tag.id);
      } else {
        this.$emit("add-tag", tag.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tags-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .tags-list__item {
    padding: 6px 15px;
    margin-right: 10px;
    border: 2px solid black;
    &:hover {
      cursor: pointer;
    }
    &.selected {
      background-color: black;
      p {
        color: white;
      }
    }
  }
  &.sm {
    .tags-list__item {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
