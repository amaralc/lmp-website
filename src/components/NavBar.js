import React, { Component } from "react";
import logo from "../img/logo_horizontal.png";

import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        style={{ paddingTop: "10px" }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link className="justify-content-start" href="/">
          <Navbar.Brand>
            <Image src={logo} style={{ height: "30px" }} />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Areas" id="basic-nav-dropdown">
              <NavDropdown.Item href="laser">Laser</NavDropdown.Item>
              <NavDropdown.Item href="machining">Machining</NavDropdown.Item>
              <NavDropdown.Item href="grinding">Grinding</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Team">Team</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
