import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
