const assetsPath =
  process.env.REACT_STATIC_ENV === "production" ? "/multiverse-portfolio" : "";

const getImageUrl = (imagePath) => assetsPath + imagePath;
import siteData from "./defaultContent";

export default {
  assetsPath: assetsPath,
  paths: {
    dist: "docs",
  },
  getSiteData: () => siteData,
  plugins: [
    "react-static-plugin-react-router",
    "react-static-plugin-styled-components",
  ],
};
