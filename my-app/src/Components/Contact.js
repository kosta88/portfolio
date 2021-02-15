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
            <img className='img-borders' style={{ height: "125pt" , margin:'1em'}}
              src="images/mainWhite.jpeg" alt="avatar" />
          </div>
          <h1 className='secondary-Headers'>Contact info</h1>          
          <div style={{padding:'1%'}}>
            <ul style={{ listStyleType: 'none'}}>
              <li>
                <FontAwesomeIcon icon={faPhone} >
                </FontAwesomeIcon >
                    +972-559875495</li>
              <br />
              <li>
                <FontAwesomeIcon icon={faEnvelope} >
                </FontAwesomeIcon >
                kostiask@gmail.com</li>
            </ul>
            </div>

            <hr style={{ borderTop: "1px solid black", width: "25vw" }} />

            <p style={{ padding:'1em' , fontSize:'0.85em'}}>
              I have been very passionate about computers and programming since
              my university life.
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
