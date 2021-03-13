<template>
  <div>
    {{ $page.project }}
  </div>
</template>
<page-query>
query ($path: String!) {
  project: projects (path: $path) {
    title
    content
    image
  }
}
</page-query>
