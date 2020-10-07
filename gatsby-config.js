/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Portfolio",
    author: "Ilyass Belkasmi",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "babel-plugin-styled-components",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-modal-routing",
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.YOUR_FIREBASE_API_KEY,
          authDomain: process.env.YOUR_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.YOUR_FIREBASE_DATABASE_URL,
          projectId: process.env.YOUR_FIREBASE_PROJECT_ID,
          storageBucket: process.env.YOUR_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.YOUR_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.YOUR_FIREBASE_APP_ID,
          measurementId: process.env.MEASUREMENT_ID,
        },
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkInagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
  ],
}
