module.exports = {
  siteName: "NEIWAD",
  siteUrl: "https://neiwad.io",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "posts/**/*.md",
        typeName: "Posts",
        remark: {
          //Config options can be added here
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`,
      },
    },
  ],
  templates: {},
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ],
    },
  },
};
