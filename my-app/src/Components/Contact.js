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
          <div style={{ textAlign: "center" }}>
          <br />
            <h1>Sklonnie Konstantin</h1>
            <img className='img-borders' style={{ height: "125pt" , margin:'1%'}}
              src="images/mainWhite.jpeg" alt="avatar" />
          </div>
          <h3>Contact info</h3>
          <hr style={{ borderTop: "2px solid black", width: "25%" }} />
          
          <div style={{padding:'1%'}}>
            <ul style={{ listStyleType: 'none'}}>
              <li>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '3%' }}>
                </FontAwesomeIcon >
                    +972-559875495</li>
              <br />
              <li>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '2%' }}>
                </FontAwesomeIcon >
                kostiask@gmail.com</li>
            </ul>
            </div>

            <hr style={{ borderTop: "2px solid black", width: "40%" }} />

            <h5 style={{ margin: 'auto', padding:'2%' }}>
              I have been very passionate about computers and programming since
              my university life.
              <br />
              I dream to be an expert software engineer so
              that I can build professional and useful software that has
              business value.
            </h5>
        </Container>
        <MyFooter/>
      </div>
    );
  }
}

export default Contact;
