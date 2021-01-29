import React, { Component } from "react";
import { Container, Row, Col, } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div className='homepage-grid' >
        <Container fluid>
          <Row>
            <Col sm={5} style={{ paddingTop: '3%' }}>
              <h2>Sklonnie Konstantin</h2>

              <img style={{ height: '250px' }} src="images/kosta.jpg" alt="avatar" />
              <hr style={{ borderTop: "1px solid black", width: "55%" }} />

              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                I have been very passionate about computers and programming since
                my university life.
              <br /> I dream to be an expert software engineer so
              that I can build professional and useful software that has
              business value.
            </p>
            </Col>

            <Col sm={7} style={{ paddingTop: '7%' }}>
              <h3>Contact info</h3>
              <hr style={{ borderTop: "1px solid black", width: "55%" }} />
              <div >
                <ul style={{ listStyleType: 'none', marginRight: '5%' }}>
                  <li>+972-559875495</li>
                  <br/>
                  <li>kostiask@gmail.com</li>
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
