module.exports = {
  siteMetadata: {
    title: `Jaye Hackett`,
    description: `Experience designer & technologist.`,
    author: `@dinosaurenby`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Rubik',
            variants: [`300`, `300i`, `400`, '700', `900`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
