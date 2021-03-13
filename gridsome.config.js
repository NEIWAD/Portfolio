module.exports = {
  siteName: "NEIWAD",
  siteUrl: "https://neiwad.io",
  plugins: [],
  templates: {
    Project: [
      {
        path: "/projects/:slug",
        component: "./src/templates/Project.vue",
      },
    ],
  },
};
