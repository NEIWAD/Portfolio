<template>
  <Layout>
    <div class="container">
      <h1>List articles</h1>
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="article d-flex"
      >
        <div
          class="article__img"
          :style="{ 'background-image': 'url(' + post.node.image + ')' }"
        ></div>
        <div class="article__body">
          <g-link :to="post.node.path" class="article__link"></g-link>
          <h1 class="article__title">{{ post.node.title }}</h1>
          <p class="article__abstract">{{ post.node.abstract }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  posts: allPosts {
    edges {
      node {
        title
        abstract
        image
        path
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "My blog",
  },
};
</script>
<style>
.article {
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 11px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
}
@media screen and (max-width: 992px) {
  .article {
    display: block;
  }
}
.article__title {
  margin-top: 0;
}
.article__body {
  padding: 15px 30px;
}
.article__link {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.article__img {
  width: 250px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-right: 15px;
}
@media screen and (max-width: 992px) {
  .article__img {
    width: 100%;
    height: 180px;
  }
}
</style>
