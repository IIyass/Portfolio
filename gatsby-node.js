const path = require("path")

exports.onCreateBabelConfig = ({ stage, actions }, pluginOptions) => {
  const ssr = stage === `build-html` || stage === `build-javascript`

  actions.setBabelPlugin({
    name: `babel-plugin-styled-components`,
    stage,
    options: { ...pluginOptions, ssr },
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ProjectTemplate = path.resolve("./src/templates/project.js")

  const response = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      component: ProjectTemplate,
      path: `/project/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
