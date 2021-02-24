import React from "react";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import MyFooter from './miniComponents/MyFooter'

export default function Contact() {
  let summary = ''
  return (
    <div className='homepage-full' style={{ color: 'black' }}>
      <Container fluid>
        <div>
          <h1 className='name-text' >Sklonnie Konstantin</h1>
          <img className='img-borders' style={{ height: "125pt", margin: '0.2em' }}
            src="images/mainRed.jpeg" alt="avatar" />
        </div>
        <div style={{ padding: '0.2em' }}>
          <h1 className='secondary-Headers'>Contact info</h1>
          <ul style={{ listStyleType: 'none', marginRight: '1.55em' }}>
            <li >
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0.5em' }}>
              </FontAwesomeIcon >
                    +972-559875495</li>
            <br />
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.25em' }}>
              </FontAwesomeIcon >
                kostiask@gmail.com</li>
          </ul>
        </div>
        
        <div>
          <hr style={{ borderTop: "0.5px solid black", width: "25vw" }} />
          <p style={{ fontSize: '0.8em' }}>
              I have been very passionate about computers and programming since young age    <br />
              I dream to be an expert software engineer <br />
              so that I can contribute and build a professional software that has
              business value </p>
        </div>
      </Container>
      <MyFooter />
    </div>
  );
}
