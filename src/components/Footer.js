import React, { Component } from "react";

import { Navbar } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <Navbar
        fixed="bottom"
        style={{ backgroundColor: "var(--lmp-dark-blue)" }}
      >
        <Navbar.Text className="mx-auto text-white">
          Copyright &copy; LMP 2019
        </Navbar.Text>
      </Navbar>
    );
  }
}

export default Footer;
