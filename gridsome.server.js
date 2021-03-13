module.exports = function(api) {
  api.loadSource(async (actions) => {
    const Projects = require("./src/data/project.json");

    const collection = actions.addCollection({
      typeName: "Project",
    });

    for (const project of Projects) {
      collection.addNode(project);
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
