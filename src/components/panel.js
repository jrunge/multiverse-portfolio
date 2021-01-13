import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Panel = styled.footer`
  transform: translateY(100vh);
  padding: 4em 4em 2em 4em;
  -webkit-overflow-scrolling: touch;
  background: rgba(36, 38, 41, 0.975);
  bottom: 4em;
  left: 0;
  ${(props) => (props.full ? "height: calc(100vh - 4em);" : "")}
  overflow-y: auto;
  position: fixed;
  width: 100%;
  z-index: 10001;

  &.panel-enter {
    transform: translateY(100vh);
  }
  &.panel-enter-active {
    transform: translateY(1px);
    transition: transform 0.5s ease;
  }
  &.panel-enter-done {
    transform: translateY(1px);
  }
  &.panel-exit {
    transform: translateY(1px);
  }
  &.panel-exit-active {
    transform: translateY(100vh);
    transition: transform 0.5s ease;
  }
  &.panel-exit-done {
    transform: translateY(100vh);
  }

  .inner {
    margin: 0 auto;
    max-width: 100%;
    width: 75em;
  }

  .inner.split {
    display: flex;
  }

  .inner.split > div {
    margin-left: 4em;
    width: 50%;
  }

  .inner.split > :first-child {
    margin-left: 0;
  }

  > .closer {
    transition: opacity 0.2s ease-in-out;
    background-image: url(${require("../images/close.svg")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 3em;
    cursor: pointer;
    height: 5em;
    opacity: 0.25;
    position: absolute;
    right: 0;
    top: 0;
    width: 5em;
    z-index: 2;
    border-bottom: 0;
  }

  > .closer:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1280px) {
    padding: 3em 3em 1em 3em;

    > .inner.split > div {
      margin-left: 3em;
    }

    > .closer {
      background-size: 2.5em;
      background-position: 75% 25%;
    }
  }

  @media screen and (max-width: 980px) {
    > .inner.split {
      flex-direction: column;
    }

    > .inner.split > div {
      margin-left: 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 736px) {
    padding: 4em 2em 2em 2em;
    bottom: auto;
    top: calc(4em - 1px);

    &.panel-enter {
      transform: translateY(-100vh);
    }
    &.panel-enter-active {
      transform: translateY(1px);
    }
    &.panel-exit {
      transform: translateY(1px);
    }
    &.panel-exit-active {
      transform: translateY(-100vh);
    }
  }
`;
export default ({ full, children }) => (
  <Panel full={full}>
    {children}
    <Link to="/" className="closer" />
  </Panel>
);
