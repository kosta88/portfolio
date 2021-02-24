import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Main from "./Components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar className='navbar-custom' collapseOnSelect sticky="top" variant='dark' expand="lg" >
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faHome} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/Aboutme">About Me</Nav.Link>
              <Nav.Link href="/Resume">Resume</Nav.Link>
              <Nav.Link href="/Projects">Projects</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Main />
        </div>
      </div>
    );
  }
}
export default App;
