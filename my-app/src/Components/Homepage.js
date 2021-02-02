import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

class Homepage extends Component {
  render() {
    return (
      <div className='homepage-full' >

          <div className="profile-img-border">
            <img
              className="profile-img"
              src="images/kosta.jpg"
            // alt="******"
            />
          </div>


          <div className="banner-text" >
            <h1 style={{paddingBottom:'2%'}}>Computer Science graduate</h1>
            <hr />
            <p>
              JAVA | JavaScript | C++ | Node JS | Express JS | React JS | Postman | MongoDB
            </p>

            <div className="social-links">
              {/* LinkedIn */}
                 <a href="https://www.linkedin.com/in/kostas2019/"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon icon={faLinkedin}>
                </FontAwesomeIcon >
              </a>

              {/* github */}
              <a  href="https://github.com/kosta88"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon icon={faGithubAlt}>
                </FontAwesomeIcon >
              </a>

              {/*facebook */}
              <a
                href="https://www.facebook.com/kostiask"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon icon={faFacebook}>
                </FontAwesomeIcon >
              </a>
            </div>

          </div>

      </div>
    );
  }
}

export default Homepage;
