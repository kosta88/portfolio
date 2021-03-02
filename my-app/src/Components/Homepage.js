import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { Container } from "react-bootstrap";

export default function Homepage () {
    return (
      <div className='homepage-full' >

        <h1 className='name-text'>Sklonnie Konstantin</h1>
        <div className="profile-img-border">
        <img  style={{ height: "125pt", margin: '0.2em' }} src="images/main.png" alt="avatar" />
        </div>
        <Container fluid>
          <div className="banner-text" >
            <h1 >Computer Science Graduate</h1>
            <hr />
            <p>   JAVA | JavaScript | C++ | Node JS | Express JS | React JS | Postman | MongoDB </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/kostas2019/"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon size='2x' icon={faLinkedin}>
                </FontAwesomeIcon > </a>
              {/* github */}
              <a href="https://github.com/kosta88"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon size='2x' icon={faGithubAlt}>
                </FontAwesomeIcon >  </a>
              {/*facebook */}
              <a
                href="https://www.facebook.com/kostiask"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon size='2x' icon={faFacebook}>
                </FontAwesomeIcon >  </a>
            </div>
          </div>
          </Container>
      </div>
    );
}

