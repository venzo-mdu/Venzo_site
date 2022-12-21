// const path = require(`path`)
// // // Log out information after a build is done
// // exports.onPostBuild = ({ reporter }) => {
// //   reporter.info(`Your Gatsby site has been built!`)
// // }
// // Create blog pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const newproduct = path.resolve(`src/blogs/newproduct.js`)
//   const reacctjsuse = path.resolve(`src/blogs/reacctjsuse.js`)
//   const selenium = path.resolve(`src/blogs/selenium.js`)
//   const topmobile = path.resolve(`src/blogs/topmobile.js`)
//   const staffblog = path.resolve(`src/blogs/staffblog.js`)
//   const angularvsreact = path.resolve(`src/blogs/angularvsreact.js`)
// //   const newproduct = path.resolve(`src/blogs/newproduct.js`)

//   const result = await graphql(`
//     query {
//       allSamplePages {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//   `)
//   result.data.allSamplePages.edges.forEach(edge => {
//     createPage({
//       path: `${edge.node.id}`,
//       component: path.resolve(`./src/templates/project-detailsjs`),
//       context: {
//         id:{id:node.createPage.id}
//       },
//     })
//   })
// }