import React from "react";
import NavBar from "./components/NavBar";

export default class App extends React.Component {
  render() {
    return (
      <div> 
        <NavBar/>       
        <main>{this.props.children}</main>
      </div>
    );
  }
}