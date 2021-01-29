import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Education from "./Education";
import Skills from "./Skills";
// import Experience from "./Experience";

class Resume extends Component {
  render() {
    return (
      <div className='homepage-unlock'>
        <Container fluid>
          <Row>
            <Col sm={5} style={{ padding: "2%" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  src="images/kosta.jpg"
                  alt="avatar"
                  style={{ height: "250px" }}
                />  </div>

              <h2 style={{ paddingTop: '1%' }}>Sklonnie Konstantin</h2>
              <hr style={{ borderTop: "1px solid #833fb2", width: "75%" }} />
              <p style={{ padding: '1%' }}>
                A recent computer science graduate with high motivation to put my current knowledge into
             <br /> use and great passion to learn and explore new technologies <br />
            Good team worker with great communication skills </p>

              {/* <h4 style={{ color: "grey" }}>Asp .Net Developer</h4> */}
              <hr style={{ borderTop: "1px solid #833fb2", width: "75%" }} />
              <h5>Address</h5>
              <p>Israel</p>
              <h5>Phone</h5>
              <p>+972 55-9875495</p>
              <h5>Email</h5>
              <p>kostiask@gmail.com</p>
              <h5>View CV *.pdf file</h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/file/d/1-Fft3V2hseraJsbM0gdbOy9KMsejcUpy/view?usp=sharing"
              > click to View
            </a>

            </Col>


            <Col style={{ background: '#27221f', color: '#fff', width: '100%', height: '100%' }} >
              <hr style={{ borderTop: "2px solid #e22947", width: "80%" }} />

              <h4 style={{ marginTop: '1%', marginBottom: '1%' }}>Education</h4>
              <Education
                startYear={2016}
                endYear={2020}
                schoolName={"Tel-Hai academic college"}
                degreeName={"Computer science B.sc"}
              />
              <Education
                startYear={2014}
                endYear={2016}
                schoolName={"Southwestern University of Finance and Economics, Sichuan China"}
                degreeName={"Chinese Language Study"}
              />
              {/* <Education
                startYear={2002}
                endYear={2006}
                schoolName={"physics and electronics curriculum in Ktziney Yam Akko"}
                degreeName={"High school diploma"}
              /> */}


              <hr style={{ borderTop: "2px solid #e22947", width: "80%" }} />

              {/* <h4>Experience</h4>
            <Experience
              startYear={"Spring 2019"}
              endYear={"Fall 2019"}
              jobName={"Trainer For Junior Solver"}
              jobDesc={"Teach C Programming Language 1st year students"}
            /> */}

              {/* <hr style={{ borderTop: "2px solid #e22947" }} /> */}


              <h4 style={{ marginBottom: '2%' }}>Skills</h4>
              <Skills skill={"Java"} progress={85} />
              <Skills skill={"JavaScript"} progress={90} />
              <Skills skill={"C++"} progress={80} />
              {/* <Skills skill={"C"} progress={70} /> */}
              <Skills skill={"React js"} progress={60} />
              <Skills skill={"Node js"} progress={65} />
              <Skills skill={"Express js"} progress={70} />
              <Skills skill={"MongoDB"} progress={55} />
              <hr style={{ borderTop: "2px solid #e22947", width: "80%" }} />

              <h4>Languages</h4>
              <ul style={{ listStyleType: 'none', marginRight: '5%' }}>
                <li>English</li>
                <li>Hebrew</li>
                <li>Russian</li>
                <li>Chinese</li>
              </ul>

              <br/><br/><br/><br/>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default Resume;
