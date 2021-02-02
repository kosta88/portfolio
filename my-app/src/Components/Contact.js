import React, { Component } from "react";
import { Container, Row, Col, } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  render() {
    return (
      <div className='homepage-full'  style={{color:'#fff'}}>
        <Container fluid>
          <div style={{ textAlign: "center" }}>
          <br />
            <h2>Sklonnie Konstantin</h2>
            <img style={{ height: "85pt" }}
              src="images/kosta.jpg" alt="avatar" />
          </div>
          <h3>Contact info</h3>
          <hr style={{ borderTop: "2px solid black", width: "25%" }} />
          <div >
            <ul style={{ listStyleType: 'none', marginRight: '5%' }}>
              <li>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '4%' }}>
                </FontAwesomeIcon >
                    +972-559875495</li>
              <br />
              <li>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '2%' }}>
                </FontAwesomeIcon >
                kostiask@gmail.com</li>
            </ul>
            <hr style={{ borderTop: "2px solid black", width: "55%" }} />
            <p style={{ fontSize: '85%', width: '95%', margin: 'auto' }}>
              I have been very passionate about computers and programming since
              my university life.
              <br />
              I dream to be an expert software engineer so
              that I can build professional and useful software that has
              business value.
            </p>
          </div>

        </Container>
      </div>
    );
  }
}

export default Contact;
