export default {
  // basePath: 'multiverse-portfolio',
  assetsPath: '/multiverse-portfolio',
  paths: {
    dist: 'docs',
  },
  getSiteData: () => ({
    title: 'Multiverse Portfolio',
  }),
  plugins: ["react-static-plugin-styled-components"]
};
