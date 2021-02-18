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
          <img
            // className="profile-img"
            src="images/main.jpeg"
          // alt="******"
          />
        </div>
        <Container fluid>
          <div className="banner-text" >
            <h1 style={{ padding: '0.25em', fontSize: '1.75em' }}>Computer Science Graduate</h1>
            <hr />
            <p>
              JAVA | JavaScript | C++ | Node JS | Express JS | React JS | Postman | MongoDB
            </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/kostas2019/"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon size='2x' icon={faLinkedin}>
                </FontAwesomeIcon >
              </a>
              {/* github */}
              <a href="https://github.com/kosta88"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon size='2x' icon={faGithubAlt}>
                </FontAwesomeIcon >
              </a>
              {/*facebook */}
              <a
                href="https://www.facebook.com/kostiask"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon size='2x' icon={faFacebook}>
                </FontAwesomeIcon >
              </a>
            </div>
          </div>
          </Container>
      </div>
    );
}

