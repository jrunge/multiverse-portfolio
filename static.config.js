export default {
  basePath: 'multiverse-portfolio',
  paths: {
    dist: 'docs',
  },
  getSiteData: () => ({
    title: 'Multiverse Portfolio',
  }),
  plugins: ["react-static-plugin-styled-components"]
};
