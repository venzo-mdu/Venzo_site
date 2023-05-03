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
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        enableWebVitalsTracking: true,
        selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
  ]
};