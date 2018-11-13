import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  padding: 4em 4em 2em 4em ;
  transform: translateY(${(props) => props.open ? '1px' : '100vh'});
  transition: transform 0.5s ease;
  -webkit-overflow-scrolling: touch;
  background: rgba(36, 38, 41, 0.975);
  bottom: 4em;
  left: 0;
  max-height: calc(100vh - 4em);
  overflow-y: auto;
  position: fixed;
  width: 100%;
  z-index: 10001;

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

      .panel > .inner.split > div {
        margin-left: 3em;
      }

      .panel > .closer {
        background-size: 2.5em;
        background-position: 75% 25%;
      }

  }

  @media screen and (max-width: 980px) {

    .panel > .inner.split {
      flex-direction: column;
    }

      .panel > .inner.split > div {
        margin-left: 0;
        width: 100%;
      }

  }

  @media screen and (max-width: 736px) {
      transform: translateY(${(props) => props.open ? '0' : '-100vh'});
      padding: 4em 2em 2em 2em ;
      bottom: auto;
      top: calc(4em - 1px);
  }

  /* Form */

	form {
		margin: 0 0 2em 0;
	}

	form .field {
		margin: 0 0 1.3em 0;
	}

	form .field.half {
		float: left;
		padding: 0 0 0 0.65em;
		width: 50%;
	}

	form .field.half.first {
		padding: 0 0.65em 0 0;
	}

	form > .actions {
		margin: 1.5em 0 0 0 !important;
	}

	@media screen and (max-width: 736px) {

		form .field.half {
			float: none;
			padding: 0;
			width: 100%;
		}

		form .field.half.first {
			padding: 0;
		}

	}

  label {
		color: #ffffff;
		display: block;
		font-size: 0.9em;
		font-weight: 300;
		margin: 0 0 1em 0;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	input[type="tel"],
	input[type="search"],
	input[type="url"],
	select,
	textarea {
		appearance: none;
		background: #34363b;
		border: 0;
		border-radius: 0;
		color: #a0a0a1;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		input[type="tel"]:invalid,
		input[type="search"]:invalid,
		input[type="url"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		input[type="tel"]:focus,
		input[type="search"]:focus,
		input[type="url"]:focus,
		select:focus,
		textarea:focus {
			box-shadow: inset 0 0 0 2px #34a58e;
		}

	.select-wrapper {
		text-decoration: none;
		display: block;
		position: relative;
	}

		.select-wrapper:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
		}

		.select-wrapper:before {
			color: #36383c;
			content: '\f078';
			display: block;
			height: 2.75em;
			line-height: 2.75em;
			pointer-events: none;
			position: absolute;
			right: 0;
			text-align: center;
			top: 0;
			width: 2.75em;
		}

		.select-wrapper select::-ms-expand {
			display: none;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	input[type="tel"],
	input[type="search"],
	input[type="url"],
	select {
		height: 2.75em;
	}

	textarea {
		padding: 0.75em 1em;
	}

	input[type="checkbox"],
	input[type="radio"] {
		appearance: none;
		display: block;
		float: left;
		margin-right: -2em;
		opacity: 0;
		width: 1em;
		z-index: -1;
	}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			text-decoration: none;
			color: #a0a0a1;
			cursor: pointer;
			display: inline-block;
			font-size: 1em;
			font-weight: 300;
			padding-left: 2.4em;
			padding-right: 0.75em;
			position: relative;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				background: #34363b;
				content: '';
				display: inline-block;
				height: 1.65em;
				left: 0;
				line-height: 1.58125em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 1.65em;
			}

		input[type="checkbox"]:checked + label:before,
		input[type="radio"]:checked + label:before {
			background: #34a58e;
			border-color: #34a58e;
			color: #ffffff;
			content: '\f00c';
		}

		input[type="checkbox"]:focus + label:before,
		input[type="radio"]:focus + label:before {
			box-shadow: 0 0 0 2px #34a58e;
		}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		color: #707071 !important;
		opacity: 1.0;
	}

	:-moz-placeholder {
		color: #707071 !important;
		opacity: 1.0;
	}

	::-moz-placeholder {
		color: #707071 !important;
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		color: #707071 !important;
		opacity: 1.0;
	}

	.formerize-placeholder {
		color: #707071 !important;
		opacity: 1.0;
	}

  /* Button */

  	input[type="submit"],
  	input[type="reset"],
  	input[type="button"],
  	button,
  	.button {
  		-moz-appearance: none;
  		-webkit-appearance: none;
  		-ms-appearance: none;
  		appearance: none;
  		-moz-transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  		-webkit-transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  		-ms-transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  		transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  		background-color: transparent;
  		border: 0;
  		border-radius: 0;
  		box-shadow: inset 0 0 0 2px #36383c;
  		color: #ffffff !important;
  		cursor: pointer;
  		display: inline-block;
  		font-size: 0.9em;
  		font-weight: 300;
  		height: 3.05556em;
  		letter-spacing: 0.1em;
  		line-height: 3.05556em;
  		padding: 0 2.5em;
  		text-align: center;
  		text-decoration: none;
  		text-transform: uppercase;
  		white-space: nowrap;
  	}

  		input[type="submit"]:hover,
  		input[type="reset"]:hover,
  		input[type="button"]:hover,
  		button:hover,
  		.button:hover {
  			box-shadow: inset 0 0 0 2px #34a58e;
  			color: #34a58e !important;
  		}

  			input[type="submit"]:hover:active,
  			input[type="reset"]:hover:active,
  			input[type="button"]:hover:active,
  			button:hover:active,
  			.button:hover:active {
  				background-color: rgba(52, 165, 142, 0.15);
  				color: #34a58e !important;
  			}

  		input[type="submit"].icon,
  		input[type="reset"].icon,
  		input[type="button"].icon,
  		button.icon,
  		.button.icon {
  			padding-left: 1.35em;
  		}

  			input[type="submit"].icon:before,
  			input[type="reset"].icon:before,
  			input[type="button"].icon:before,
  			button.icon:before,
  			.button.icon:before {
  				margin-right: 0.5em;
  			}

  		input[type="submit"].fit,
  		input[type="reset"].fit,
  		input[type="button"].fit,
  		button.fit,
  		.button.fit {
  			display: block;
  			margin: 0 0 1em 0;
  			width: 100%;
  		}

  		input[type="submit"].small,
  		input[type="reset"].small,
  		input[type="button"].small,
  		button.small,
  		.button.small {
  			font-size: 0.8em;
  		}

  		input[type="submit"].big,
  		input[type="reset"].big,
  		input[type="button"].big,
  		button.big,
  		.button.big {
  			font-size: 1.35em;
  		}

  		input[type="submit"].special,
  		input[type="reset"].special,
  		input[type="button"].special,
  		button.special,
  		.button.special {
  			background-color: #34a58e;
  			box-shadow: none;
  		}

  			input[type="submit"].special:hover,
  			input[type="reset"].special:hover,
  			input[type="button"].special:hover,
  			button.special:hover,
  			.button.special:hover {
  				background-color: #47c5ab;
  				color: #ffffff !important;
  			}

  				input[type="submit"].special:hover:active,
  				input[type="reset"].special:hover:active,
  				input[type="button"].special:hover:active,
  				button.special:hover:active,
  				.button.special:hover:active {
  					background-color: #287e6d;
  				}

  		input[type="submit"].disabled, input[type="submit"]:disabled,
  		input[type="reset"].disabled,
  		input[type="reset"]:disabled,
  		input[type="button"].disabled,
  		input[type="button"]:disabled,
  		button.disabled,
  		button:disabled,
  		.button.disabled,
  		.button:disabled {
  			-moz-pointer-events: none;
  			-webkit-pointer-events: none;
  			-ms-pointer-events: none;
  			pointer-events: none;
  			opacity: 0.35;
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
    return (
      <Footer loading={this.state.loading} open={this.props.open}>
        <div className="inner split">
          <div>
            <section>
              <h2>Magna feugiat sed adipiscing</h2>
              <p>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum.</p>
            </section>
            <section>
              <h2>Follow me on ...</h2>
              <ul className="icons">
                <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
              </ul>
            </section>
            <p className="copyright">
              &copy; Unttled. Design: <a href="http://html5up.net">HTML5 UP</a>.
            </p>
          </div>
          <div>
            <section>
              <h2>Get in touch</h2>
              <form method="post" action="#">
                <div className="field half first">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="field half">
                  <input type="text" name="email" id="email" placeholder="Email" />
                </div>
                <div className="field">
                  <textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send" className="special" /></li>
                  <li><input type="reset" value="Reset" /></li>
                </ul>
              </form>
            </section>
          </div>
        </div>
        <div className="closer" onClick={this.props.close}></div>
      </Footer>
    )
  }
}

export default MyFooter
