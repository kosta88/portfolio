import React, { Component } from "react";
import "./App.css";
import './Animation.css'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: true,
    }
    this.clickStateHandler = this.clickStateHandler.bind(this)
  }

  clickStateHandler() {
    this.setState({ animate: false });
  }

  componentDidMount(){
    if(window.sessionStorage.getItem('firstLoadDone') === null ){
      this.setState({ animate: true })
      window.sessionStorage.setItem('firstLoadDone', true )
    }else{
      this.setState({ animate: false });
    }
  }

  componentWillUnmount(){
    sessionStorage.removeItem('firstLoadDone' )
  }

  render() {
    if(this.state.animate == true){
      return(
        <div className='fix-in-center cv-full'>
          <div className=' fade-in'>
            <h1 className='entryHeader' style={{padding:'1.5em', fontSize:'3em'}}>  Hi, My name is Kosta </h1>
            <h1 className='entryHeader'>  This is my Portfoliio </h1>
            <h1 className='click-toView' onClick={() => {this.clickStateHandler()}}>  click to Enter </h1>

            </div>
        </div>
      );
    }
    else{
    return (
      <div>
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark" style={{ color: '#fff' }}>
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
}

export default App;
