module.exports = {
  siteMetadata: {
    siteUrl: `https://www.venzotechnologies.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K4XC96N",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },

        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Venzo Technologies`,
        short_name: `Venzo`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`,

      {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: `https://www.example.com`,
        },
      },
  ],
};

