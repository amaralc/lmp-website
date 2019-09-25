import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
// import Blog from "./pages/Blog";
// import Area from "./pages/Area";
// import Laser from "./pages/Area/Laser";
// import Grinding from "./pages/Area/Grinding";
// import Machining from "./pages/Area/Machining";
import { NoPage } from "./pages/NoPage";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        {/* <Route path="/blog" component={Blog} /> */}
        {/* <Route path="/area" component={Area} /> */}
        {/* <Route path="/area/laser" component={Laser} /> */}
        {/* <Route path="/area/machining" component={Machining} /> */}
        {/* <Route path="/area/grinding" component={Grinding} /> */}
        <Route component={NoPage} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
