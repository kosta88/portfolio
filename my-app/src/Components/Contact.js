import React, { Component } from "react";
import { Container, Row, Col, } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import MyFooter from './miniComponents/MyFooter'

class Contact extends Component {
  render() {
    return (
      <div className='homepage-full'  style={{color:'black'}}>
        <Container fluid>
          <div>
            <h1 className='name-text' >Sklonnie Konstantin</h1>
            <img className='img-borders' style={{ height: "125pt" , margin:'0.5em'}}
              src="images/mainWhite.jpeg" alt="avatar" />
          </div>
          <h1 className='secondary-Headers'>Contact info</h1>          
          <div style={{padding:'1%', alignItems:''}}>
            <ul style={{ listStyleType: 'none'}}>
              <li>
                <FontAwesomeIcon icon={faPhone} style={{paddingRight:'0.2em'}}>
                </FontAwesomeIcon >
                    +972-559875495</li>
              <br />
              <li>
                <FontAwesomeIcon icon={faEnvelope} style={{paddingRight:'0.25em'}}>
                </FontAwesomeIcon >
                kostiask@gmail.com</li>
            </ul>
            </div>

            <hr style={{ borderTop: "1px solid black", width: "25vw" }} />

            <p style={{ padding:'0.25em' , fontSize:'0.8em'}}>
              I have been very passionate about computers and programming since
              very young age.
              <br />
              I dream to be an expert software engineer so              <br />
              that I can build professional and useful software that has
              business value.
            </p>
        </Container>
        <MyFooter/>
      </div>
    );
  }
}

export default Contact;
