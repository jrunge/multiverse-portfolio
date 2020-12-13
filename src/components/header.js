import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSiteData } from "react-static";

const Header = styled.header`
  transform: translateY(4em);
  transition: transform 1s ease;
  background: #1f2224;
  bottom: -1em;
  height: 5em;
  left: 0;
  line-height: 4em;
  padding: 0 1.5em;
  position: fixed;
  user-select: none;
  width: 100%;
  z-index: 10002;

  &.header-enter {
    transform: translateY(0);
  }
  &.header-enter-done {
    transform: translateY(0);
  }

  h1 {
    color: #a0a0a1;
    display: inline-block;
    font-size: 1em;
    line-height: 1;
    margin: 0;
    vertical-align: middle;

    a {
      border: 0;
      color: inherit;

      &:hover {
        color: inherit !important;
      }
    }
  }

  nav {
    position: absolute;
    right: 0;
    top: 0;

    > ul {
      list-style: none;
      margin: 0;
      padding: 0;

      > li {
        display: inline-block;
        padding: 0;

        a {
          transition: background-color 0.2s ease;
          border: 0;
          color: #ffffff;
          display: inline-block;
          letter-spacing: 0.1em;
          padding: 0 1.65em;
          text-transform: uppercase;

          &.icon {
            &:before {
              color: #505051;
              float: right;
              margin-left: 0.75em;
            }
          }

          &:hover {
            color: #ffffff !important;
          }

          &.active {
            background-color: #242629;
          }
        }
      }
    }
  }
  @media screen and (max-width: 736px) {
    transform: translateY(${(props) => (props.loading ? "-4em" : "0")});
    ${"" /* @include vendor('transform', 'translateY(0)'); */}
    bottom: auto;
    height: 4em;
    padding: 0 1em;
    top: 0;

    h1 {
      font-size: 0.9em;
    }

    nav {
      > ul {
        > li {
          a {
            font-size: 0.9em;
            padding: 0 1.15em;
          }
        }
      }
    }
  }
`;

export default () => {
  const { title } = useSiteData();
  return (
    <CSSTransition in appear timeout={200} component={null} classNames="header">
      <Header>
        <h1>
          <a href="index.html">
            <strong>{title}</strong>
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">
                About <FontAwesomeIcon icon={faInfoCircle} />
              </Link>
            </li>
          </ul>
        </nav>
      </Header>
    </CSSTransition>
  );
};
