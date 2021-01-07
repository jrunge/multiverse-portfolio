const assetsPath =
  process.env.REACT_STATIC_ENV === "production" ? "/multiverse-portfolio" : "";

const getImageUrl = (imagePath) => assetsPath + imagePath;
import defaultSiteData from "./defaultContent";
import fs from "fs";

var siteData;
try {
  if (fs.existsSync("./customContent.js")) {
    siteData = require("./customContent").default;
  } else {
    siteData = defaultSiteData;
  }
} catch (err) {
  siteData = defaultSiteData;
}

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
