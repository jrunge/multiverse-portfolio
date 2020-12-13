import React from "react";
import styled from "styled-components";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useSiteData } from "react-static";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Item = styled.div`
  .leftNav,
  .rightNav {
    appearance: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    outline: none;
    position: absolute;
    z-index: 4;
    color: #fff;
    font-size: 2em;
    padding: 50px 15px;
    top: 50%;
    opacity: 0.5;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .rightNav {
    right: 0;
  }

  .image-gallery-slide {
    background: transparent;
  }
`;

export default ({ itemId }) => {
  const { entries } = useSiteData();
  const title = itemId ? entries[itemId].title : "";
  const description = itemId ? entries[itemId].description : "";
  const images = itemId ? entries[itemId].slideshow : [];
  return (
    <Item className="inner split">
      <ImageGallery
        items={images}
        showBullets={false}
        // showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
        renderLeftNav={(onClick, disabled) => {
          return (
            <span className="leftNav" disabled={disabled} onClick={onClick}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
          );
        }}
        renderRightNav={(onClick, disabled) => {
          return (
            <span className="rightNav" disabled={disabled} onClick={onClick}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          );
        }}
      />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Item>
  );
};
