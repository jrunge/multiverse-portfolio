import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700|Raleway:400,800,900");

/*
	Multiverse by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* Reset */

	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		-webkit-text-size-adjust: none;
	}

/* Box Model */

	*, *:before, *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
/* Basic */

	@-ms-viewport {
		width: device-width;
	}

	body {
		-ms-overflow-style: scrollbar;
	}

	@media screen and (max-width: 480px) {

		html, body {
			min-width: 320px;
		}

	}

	body {
		background: #242629;
	}

/* Type */

	body, input, select, textarea {
		color: #a0a0a1;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-size: 15pt;
		font-weight: 300;
		letter-spacing: 0.025em;
		line-height: 1.65;
	}

		@media screen and (max-width: 1680px) {

			body, input, select, textarea {
				font-size: 11pt;
			}

		}
  a {
  transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
  border-bottom: dotted 1px;
  color: #34a58e;
  text-decoration: none;
  }

  a:hover {
    border-bottom-color: transparent;
    color: #34a58e !important;
  }

  strong, b {
  color: #ffffff;
  font-weight: 300;
  }

  em, i {
  font-style: italic;
  }

  p {
  margin: 0 0 2em 0;
  }

  h1, h2, h3, h4, h5, h6 {
  color: #ffffff;
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: 1.5;
  margin: 0 0 1em 0;
  text-transform: uppercase;
  }

  h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
  font-size: 2em;
  }

  h2 {
  font-size: 1.25em;
  }

  h3 {
  font-size: 1.1em;
  }

  h4 {
  font-size: 1em;
  }

  h5 {
  font-size: 0.9em;
  }

  h6 {
  font-size: 0.7em;
  }

  @media screen and (max-width: 736px) {

  h2 {
    font-size: 1em;
  }

  h3 {
    font-size: 0.9em;
  }

  h4 {
    font-size: 0.8em;
  }

  h5 {
    font-size: 0.7em;
  }

  h6 {
    font-size: 0.7em;
  }

  }

  sub {
  font-size: 0.8em;
  position: relative;
  top: 0.5em;
  }

  sup {
  font-size: 0.8em;
  position: relative;
  top: -0.5em;
  }

  blockquote {
  border-left: 4px #36383c;
  font-style: italic;
  margin: 0 0 2em 0;
  padding: 0.5em 0 0.5em 2em;
  }

  code {
  background: #34363b;
  border: solid 1px #36383c;
  font-family: "Courier New", monospace;
  font-size: 0.9em;
  margin: 0 0.25em;
  padding: 0.25em 0.65em;
  }

  pre {
  -webkit-overflow-scrolling: touch;
  font-family: "Courier New", monospace;
  font-size: 0.9em;
  margin: 0 0 2em 0;
  }

  pre code {
    display: block;
    line-height: 1.75;
    padding: 1em 1.5em;
    overflow-x: auto;
  }

  hr {
  border: 0;
  border-bottom: solid 1px #36383c;
  margin: 2em 0;
  }

  hr.major {
    margin: 3em 0;
  }

  .align-left {
  text-align: left;
  }

  .align-center {
  text-align: center;
  }

  .align-right {
  text-align: right;
  }
`

const AppStyles = styled.div`

`

const App = () => (
  <Router>
    <AppStyles>
      <Routes />
      {/* <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">

      </div> */}
    </AppStyles>
  </Router>
)

export default hot(module)(App)
