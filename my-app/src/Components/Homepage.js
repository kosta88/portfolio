import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';


import { faHome, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Homepage extends Component {
  render() {
    return (
      <div className='homepage-grid' >
        <Container fluid >
          <div className="profile-img-border">
            <img
              className="profile-img"
              src="images/kosta.jpg"
            // alt="******"
            />
          </div>
          <div className="banner-text">
            <h1>Computer Science graduate</h1>
            <hr />
            <p>
              JAVA | JavaScript | C++ | Node JS | Express JS | React JS | Postman | MongoDB
              </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kostas2019/"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon icon={faHome}>
                </FontAwesomeIcon >
              </a>

              {/* github */}
              <a
                href="https://github.com/kosta88"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon icon={faHome}>
                </FontAwesomeIcon >
              </a>

              {/* LinkedIn */}
              <a
                href="*******************/"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon icon={faHome}>
                </FontAwesomeIcon >
              </a>

              {/*facebook */}
              <a
                href="https://www.facebook.com/kostiask"
                rel="noopener noreferrer"
                target="_blank"  >
                <FontAwesomeIcon icon={faHome}>
                </FontAwesomeIcon >
              </a>

            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Homepage;
