import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>Teste</div>
        {this.props.children}
      </div>
    );
  }
}