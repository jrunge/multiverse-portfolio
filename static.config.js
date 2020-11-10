export default {
  // basePath: 'multiverse-portfolio',
  assetsPath: process.env.REACT_STATIC_ENV === 'production' ? '/multiverse-portfolio' : '',
  paths: {
    dist: 'docs',
  },
  getSiteData: () => ({
    title: 'Multiverse Portfolio',
  }),
  plugins: [
    "react-static-plugin-react-router",
    "react-static-plugin-styled-components"
  ]
};
