import React from "react";
import { Root, Routes } from "react-static";
import { BrowserRouter, StaticRouter } from "react-router-dom";

import "./app.css";
import Portfolio from "./components/portfolio";

const Router = typeof document !== "undefined" ? BrowserRouter : StaticRouter;

export default () => (
  <Root>
    <React.Suspense fallback={<div></div>}>
      <Router
        basename={
          process.env.REACT_STATIC_ENV === "production"
            ? "multiverse-portfolio"
            : "/"
        }
      >
        <Portfolio />
      </Router>
    </React.Suspense>
  </Root>
);
