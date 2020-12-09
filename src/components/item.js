import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

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
`;

export default () => {
  const images = [
    {
      original: require("../images/fulls/01.jpg"),
      thumbnail: require("../images/thumbs/01.jpg"),
    },
    {
      original: require("../images/fulls/02.jpg"),
      thumbnail: require("../images/thumbs/02.jpg"),
    },
    {
      original: require("../images/fulls/03.jpg"),
      thumbnail: require("../images/thumbs/03.jpg"),
    },
    {
      original: require("../images/fulls/05.jpg"),
      thumbnail: require("../images/thumbs/05.jpg"),
    },
    {
      original: require("../images/fulls/06.jpg"),
      thumbnail: require("../images/thumbs/06.jpg"),
    },
  ];
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
        <h1>Fore admodum do fabulas</h1>
        <p>
          Constias e illum si cillum fabulas do imitarentur, aliquip ex fabulas
          in multos eiusmod possumus ne quorum an se dolore singulis, iis tempor
          enim iis litteris ad de iis coniunctione, te senserit exercitation. Ad
          a minim culpa fugiat, quid a constias do labore. Do arbitror
          praesentibus.Aute consequat voluptatibus, nostrud familiaritatem o
          aliquip id expetendis velit enim aliquip quae, aut nulla reprehenderit
          hic a irure mandaremus, laborum o cillum se quae mandaremus
          consectetur e hic appellat exercitation. Se velit constias
          familiaritatem.
        </p>
      </div>
    </Item>
  );
};
