import React from "react";
// import { withSiteData } from "react-static";
import Grid from "hedron";
import styled from "styled-components";
import { map, padStart } from "lodash";

const pad = padStart

const Image = styled.div`
  height: calc(40vh - 2em);
  min-height: 20em;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  transition: opacity 1.25s ease-in-out;
  transition-delay: ${props => 0.65 + props.index * 0.15}s;
  opacity: ${props => (props.loading ? "0" : "1")};
  &::after {
    background-image: linear-gradient(
      to top,
      rgba(10, 17, 25, 0.35) 5%,
      rgba(10, 17, 25, 0) 35%
    );
    pointer-events: none;
    background-size: cover;
    content: "";
    display: block;
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
  }
`;

const ImageTitle = styled.h2`
  pointer-events: none;
  bottom: 1.875em;
  font-size: 0.8em;
  left: 2.1875em;
  position: absolute;
  z-index: 1;
  margin: 0px;
`;

class ImageGrid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    setTimeout(() => this.setState({loading: false}), 100)
  }

  render () {
    const titles = [
      "Magna feugiat lorem",
      "Nisl adipiscing",
      "Tempus aliquam veroeros",
      "Aliquam ipsum sed dolore",
      "Cursis aliquam nisl",
      "Sed consequat phasellus",
      "Mauris id tellus arcu",
      "Nunc vehicula id nulla",
      "Neque et faucibus viverra",
      "Mattis ante fermentum",
      "Sed ac elementum arcu",
      "Vehicula id nulla dignissim"
    ];

    const getImageUrl = (index) => require(`../images/thumbs/${pad(index + 1, 2,"0")}.jpg`);

    return (
      <Grid.Provider
        breakpoints={{ sm: "-500", md: "501-1100", lg: "+1101" }}
      >
        <Grid.Bounds direction="horizontal" wrap>
          {map(titles, (title, i) => (
            <Grid.Box fluid sm={{width: "100%"}} md={{width: "50%"}} lg={{width: "33.33%"}} key={`thumb-${i}`}>
              <Image
                loading={this.state.loading}
                index={i}
                onClick={this.openPanel}
                imageUrl={getImageUrl(i)}
              >
                <ImageTitle>{title}</ImageTitle>
              </Image>
            </Grid.Box>
          ))}
        </Grid.Bounds>
      </Grid.Provider>
    )
  }
}

export default ImageGrid
