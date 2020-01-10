const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {

    const { createPage } = actions
    
    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                            title
                            client
                            year
                        }
                        html
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`src/templates/post.js`)
        })
    })
}