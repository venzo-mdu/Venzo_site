module.exports = {
  siteMetadata: {
    title: `venzo technologies`,
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
  ],
};