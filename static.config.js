const assetsPath =
  process.env.REACT_STATIC_ENV === "production" ? "/multiverse-portfolio" : "";

const getImageUrl = (imagePath) => assetsPath + imagePath;

export default {
  // basePath: 'multiverse-portfolio',
  assetsPath: assetsPath,
  paths: {
    dist: "docs",
  },
  getSiteData: () => ({
    title: "Multiverse Portfolio",
    entries: [
      {
        title: "Magna feugiat lorem ipsum",
        imageUrl: getImageUrl("/images/thumbs/01.jpg"),
      },
      {
        title: "Nisl adipiscing",
        imageUrl: getImageUrl("/images/thumbs/02.jpg"),
      },
      {
        title: "Tempus aliquam veroeros",
        imageUrl: getImageUrl("/images/thumbs/03.jpg"),
      },
      {
        title: "Aliquam ipsum sed dolore",
        imageUrl: getImageUrl("/images/thumbs/04.jpg"),
      },
      {
        title: "Cursis aliquam nisl",
        imageUrl: getImageUrl("/images/thumbs/05.jpg"),
      },
      {
        title: "Sed consequat phasellus",
        imageUrl: getImageUrl("/images/thumbs/06.jpg"),
      },
      {
        title: "Mauris id tellus arcu",
        imageUrl: getImageUrl("/images/thumbs/07.jpg"),
      },
      {
        title: "Nunc vehicula id nulla",
        imageUrl: getImageUrl("/images/thumbs/08.jpg"),
      },
      {
        title: "Neque et faucibus viverra",
        imageUrl: getImageUrl("/images/thumbs/09.jpg"),
      },
      {
        title: "Mattis ante fermentum",
        imageUrl: getImageUrl("/images/thumbs/10.jpg"),
      },
      {
        title: "Sed ac elementum arcu",
        imageUrl: getImageUrl("/images/thumbs/11.jpg"),
      },
      {
        title: "Vehicula id nulla dignissim",
        imageUrl: getImageUrl("/images/thumbs/12.jpg"),
      },
    ],
  }),
  plugins: [
    "react-static-plugin-react-router",
    "react-static-plugin-styled-components",
  ],
};
