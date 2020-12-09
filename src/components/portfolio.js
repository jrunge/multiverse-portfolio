import React from "react";
import styled from "styled-components";
import { map, padStart } from "lodash";
import { CSSTransition } from "react-transition-group";
import { Route } from "react-router-dom";

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

export default () => (
  <Wrapper>
    <Header />
    <ImageGrid />
    <Route path="/item/:id">
      {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={1000}
          classNames="panel"
          unmountOnExit
        >
          <Panel full>
            <Item />
          </Panel>
        </CSSTransition>
      )}
    </Route>

    <Route path="/about">
      {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={1000}
          classNames="panel"
          unmountOnExit
        >
          <Panel>
            <About />
          </Panel>
        </CSSTransition>
      )}
    </Route>
  </Wrapper>
);
