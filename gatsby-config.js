module.exports = {
  siteMetadata: {
    title: 'Atlee Design',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37b`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
  ],
}
