import React, { Component } from "react";
import "./App.css";
// import './Animation.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    // if(this.state.animate == true){
    //   return(
    //     <div className='cv-full' onClick={() => {this.clickStateHandler()}}>
    //       <div className=' fade-in'>
    //         <h1 className='entryHeader' style={{padding:'2.5em', fontSize:'3.5em'}}> WELCOME </h1>
    //         {/* <h1 className='entryHeader'>  This is my Portfoliio </h1> */}
    //         <h1 className='click-toView'>  click to Enter </h1>

    //         </div>
    //     </div>
    //   );
    // }
    return (
      <div>
        <Navbar className='navbar-custom' collapseOnSelect sticky="top" variant='dark' expand="lg" >
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faHome} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="mr-auto" >          </Nav> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
            <Nav>
              <Nav.Link href="/Resume">Resume</Nav.Link>
              <Nav.Link href="/Aboutme">About Me</Nav.Link>
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
