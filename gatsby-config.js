module.exports = {
  siteMetadata: {
    title: 'First Gatsby Site',
    description: 'A beautiful website filled with kitties'
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blogposts`,
      }
    },
  ],
};
