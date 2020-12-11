import React from "react";
import Grid from "hedron";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { map, padStart } from "lodash";
import { Link } from "react-router-dom";
import { useSiteData } from "react-static";

const pad = padStart;

const Image = styled.div`
  height: calc(40vh - 2em);
  min-height: 20em;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  transition: opacity 1.25s ease-in-out;
  transition-delay: ${(props) => 0.65 + props.index * 0.15}s;
  opacity: 0;
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
  &.image-enter {
    opacity: 1;
  }
  &.image-enter-done {
    opacity: 1;
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

export default () => {
  const { entries } = useSiteData();
  return (
    <Grid.Provider breakpoints={{ sm: "-500", md: "501-1100", lg: "+1101" }}>
      <Grid.Bounds direction="horizontal" wrap>
        {map(entries, ({ title, imageUrl }, i) => (
          <Grid.Box
            fluid
            sm={{ width: "100%" }}
            md={{ width: "50%" }}
            lg={{ width: "33.33%" }}
            key={`thumb-${i}`}
          >
            <Link to={`/item/${i}`}>
              <CSSTransition in appear timeout={200} classNames="image">
                <Image index={i} imageUrl={imageUrl}>
                  <ImageTitle>{title}</ImageTitle>
                </Image>
              </CSSTransition>
            </Link>
          </Grid.Box>
        ))}
      </Grid.Bounds>
    </Grid.Provider>
  );
};
