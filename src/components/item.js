import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Footer = styled.footer`
  padding: 4em 4em 2em 4em ;
  /* transform: translateY(${(props) => props.open ? '1px' : '100vh'}); */
  transition: transform 0.5s ease;
  -webkit-overflow-scrolling: touch;
  background: rgba(36, 38, 41, 0.975);
  bottom: 4em;
  left: 0;
  height: calc(100vh - 4em);
  overflow-y: auto;
  position: fixed;
  width: 100%;
  z-index: 10001;

  &.item-enter {
    transform: translateY(100vh);
  }
  &.item-enter-active {
    transform: translateY(1px);
  }
  &.item-exit {
    transform: translateY(1px);
  }
  &.item-exit-active {
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
    background-image: url(${require('../images/close.svg')});
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
  }

  > .closer:hover {
    opacity: 1.0;
  }

  @media screen and (max-width: 1280px) {
      padding: 3em 3em 1em 3em ;

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
      /* transform: translateY(${(props) => props.open ? '0' : '-100vh'}); */
      padding: 4em 2em 2em 2em ;
      bottom: auto;
      top: calc(4em - 1px);

      &.item-enter {
        transform: translateY(-100vh);
      }
      &.item-enter-active {
        transform: translateY(1px);
      }
      &.item-exit {
        transform: translateY(1px);
      }
      &.item-exit-active {
        transform: translateY(-100vh);
      }
  }

  .leftNav, .rightNav {
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

`

class MyFooter extends React.Component {
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
    const images = [
      {
        original: require('../images/fulls/01.jpg'),
        thumbnail: require('../images/thumbs/01.jpg'),
      },
      {
        original: require('../images/fulls/02.jpg'),
        thumbnail: require('../images/thumbs/02.jpg'),
      },
      {
        original: require('../images/fulls/03.jpg'),
        thumbnail: require('../images/thumbs/03.jpg'),
      },
      {
        original: require('../images/fulls/05.jpg'),
        thumbnail: require('../images/thumbs/05.jpg'),
      },
      {
        original: require('../images/fulls/06.jpg'),
        thumbnail: require('../images/thumbs/06.jpg'),
      },
    ]
    return (
      <Footer loading={this.state.loading}>
        <div className="inner split">
          <div>
            <ImageGallery
              items={images}
              showBullets={false}
              // showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
              renderLeftNav={(onClick, disabled) => {
                return (
                  <span
                    className='leftNav'
                    disabled={disabled}
                    onClick={onClick}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                )
              }}
              renderRightNav={(onClick, disabled) => {
                return (
                  <span
                    className='rightNav'
                    disabled={disabled}
                    onClick={onClick}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                )
              }}
            />
          </div>
          <div>
            <h1>Fore admodum do fabulas</h1>
            <p>Constias e illum si cillum fabulas do imitarentur, aliquip ex fabulas in multos
              eiusmod possumus ne quorum an se dolore singulis, iis tempor enim iis litteris
              ad de iis coniunctione, te senserit exercitation. Ad a minim culpa fugiat, quid
              a constias do labore. Do arbitror praesentibus.Aute consequat voluptatibus,
              nostrud familiaritatem o aliquip id expetendis velit enim aliquip quae, aut
              nulla reprehenderit hic a irure mandaremus, laborum o cillum se quae mandaremus
              consectetur e hic appellat exercitation. Se velit constias familiaritatem.</p>
          </div>
        </div>
        <Link to="/" className="closer"/>
      </Footer>
    )
  }
}

export default MyFooter
