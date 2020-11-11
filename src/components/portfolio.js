import React from "react";
// import { withSiteData } from "react-static";
import styled from "styled-components";
import { map, padStart } from "lodash";
import { CSSTransition } from "react-transition-group";
import { Route} from "react-router-dom";

import Header from "../components/header";
import Item from "../components/item";
import Panel from "../components/panel";
import About from "../components/about";
import ImageGrid from "../components/imageGrid";

const Wrapper = styled.div`
  position: relative;
  padding: 0 0 4em 0;

  @media screen and (max-width: 736px) {
    padding: 4em 0 0 0;
  }
`;

class Portfolio extends React.Component {
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
        <Header/>
        <ImageGrid/>
        <Route path="/item/:id">
          {({ match }) =>
            <CSSTransition
              in={match != null}
              timeout={1000}
              classNames="panel"
              unmountOnExit
            >
              <Panel full>
                <Item/>
              </Panel>
            </CSSTransition>
          }
        </Route>

        <Route path="/about">
          {({ match }) =>
            <CSSTransition
              in={match != null}
              timeout={1000}
              classNames="panel"
              unmountOnExit
            >
              <Panel>
                <About/>
              </Panel>
            </CSSTransition>
          }
        </Route>
      </Wrapper>
    );
  }
}

// export default withSiteData(Portfolio);
export default Portfolio
