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
      <div className='homepage-grid' >
        <Container fluid>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={5} style={{ paddingTop: '3%' }}>
            <div style={{ textAlign: "center" }}>
              <h2>Sklonnie Konstantin</h2>

              <img style={{ height: "85pt" }}
                src="images/kosta.jpg" alt="avatar" />
              <hr style={{ borderTop: "1px solid black", width: "55%" }} />

              <p style={{fontSize:'85%',width: '95%', margin: 'auto' }}>
                I have been very passionate about computers and programming since
                my university life.
              <br /> I dream to be an expert software engineer so
              that I can build professional and useful software that has
              business value.
            </p>
            </div>
            </Col>

            <Col xs={8} sm={8} md={8} lg={8} xl={7} style={{ paddingTop: '7%' }}>
              <h3>Contact info</h3>
              <hr style={{ borderTop: "1px solid black", width: "55%" }} />
              <div >
                <ul style={{ listStyleType: 'none', marginRight: '5%' }}>
                  <li>
                  <FontAwesomeIcon icon={faPhone} style={{marginRight:'4%'}}>
                </FontAwesomeIcon >
                    +972-559875495</li>
                  <br />
                  <li>
                  <FontAwesomeIcon icon={faEnvelope} style={{marginRight:'2%'}}>
                </FontAwesomeIcon >
                kostiask@gmail.com</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
