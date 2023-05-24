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
    { resolve: `gatsby-plugin-offline` },
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: 'gatsby-plugin-open-graph-images' },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.venzotechnologies.com',
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /error_pages/404.html
          ErrorDocument 500 /error_pages/500.html
        `,
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'https://venzotechnologies.com',
            to: 'https://www.venzotechnologies.com',
          },
        ],
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
        `,
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.venzotechnologies.com`,
      },
    },
  ],
};

