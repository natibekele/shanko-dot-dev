const Promise = require('bluebird')
const { reject } = require('lodash')
const { resolve } = require('path')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // TODO FIX UP BLOG
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
    const projectPost = path.resolve('./src/templates/project-post.js')
    resolve(
      graphql(
        `
      {
        allContentfulProject {
          edges {
            node {
              projectTitle
              slug
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const projects = result.data.allContentfulProject.edges
        projects.forEach(project => {
          createPage({
            path: `/project/${project.node.slug}/`,
            component: projectPost,
            context: {
              slug: project.node.slug,
            },
          })
        })
      })
    )
  })
}
