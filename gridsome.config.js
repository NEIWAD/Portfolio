const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/scss/variables.scss")],
    });
}

module.exports = {
  siteName: "NEIWAD",
  siteUrl: "https://neiwad.io",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "posts/**/*.md",
        typeName: "Posts",
        remark: {},
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "Projects",
        refs: {
          tags: "projectTags",
        },
        remark: {
          //plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projectTags/**/*.md",
        typeName: "projectTags",
        remark: {},
      },
    },
  ],
  templates: {
    Posts: "/blog/:year/:month/:title",
    Projects: [
      {
        path: "/projects/:slug",
        component: "./src/templates/Project.vue",
      },
    ],
  },
  transformers: {
    remark: {},
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
};
