import React from "react";
import { withSiteData } from "react-static";
import { Page, Row, Column } from "hedron";
import styled from "styled-components";
import { map, padStart } from "lodash";

import Header from "../components/header";
import Footer from "../components/footer";

const Wrapper = styled.div`
  position: relative;
  padding: 0 0 4em 0;

  @media screen and (max-width: 736px) {
    padding: 4em 0 0 0;
  }
`;
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

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      panelOpen: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 100);
  }

  openPanel = () => {
    this.setState({ panelOpen: true });
  };

  closePanel = () => {
    this.setState({ panelOpen: false });
  };

  render() {
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
    return (
      <Wrapper>
        <Header />
        <Page fluid>
          <Row>
            {map(titles, (title, i) => (
              <Column fluid xs={12} sm={6} lg={4} key={`thumb-${i}`}>
                <Image
                  loading={this.state.loading}
                  index={i}
                  onClick={this.openPanel}
                  imageUrl={require(`../images/thumbs/${padStart(
                    i + 1,
                    2,
                    "0"
                  )}.jpg`)}
                >
                  <ImageTitle>{title}</ImageTitle>
                </Image>
              </Column>
            ))}
          </Row>
        </Page>
        <Footer open={this.state.panelOpen} close={this.closePanel}/>
      </Wrapper>
    );
  }
}

export default withSiteData(IndexPage);
