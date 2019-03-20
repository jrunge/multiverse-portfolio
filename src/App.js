import React, { Component } from 'react'
import { BrowserRouter, StaticRouter, Route} from "react-router-dom";


import './app.css'
import Portfolio from './components/portfolio'

const Router = typeof document !== 'undefined' ? BrowserRouter : StaticRouter;

class App extends Component {
  render() {
    return (
      <Router basename={process.env.REACT_STATIC_ENV === "production" ? "multiverse-portfolio" : "/"}>
        <Portfolio/>
      </Router>
    )
  }
}

export default App
