import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Education from "./miniComponents/Education";
import Skills from "./miniComponents/Skills";
// import Experience from "./Experience";

class Resume extends Component {
  render() {
    return (
      <div className='cv-full' style={{padding:'0.5em'}}>
        {/* <h1 className='secondary-Headers'>Resume</h1>
        <hr style={{ borderTop: "1px solid black", width: "10vw" }} /> */}
        <Container fluid>
          <Row>
            <Col style={{ paddingTop: "1em" }} >
                <img
                  src="images/main.jpeg"
                  alt="avatar"
                  style={{ height: "115pt" }}
                />
                <h1 style={{ paddingTop: '1em', fontSize:'1.75em' }}>Sklonnie Konstantin</h1>
                <hr style={{ borderTop: "1px solid #833fb2", width: "25vw" }} />
                <p style={{ padding: '0.5em' }}>
                  A computer science graduate with high motivation to put my current knowledge into
                 <br /> use and great passion to learn and explore new technologies <br />
                </p>
                {/* Good team worker with great communication skills */}


                {/* <h4 style={{ color: "grey" }}>Asp .Net Developer</h4> */}

                <hr style={{ borderTop: "1px solid #833fb2", width: "25vw" }} />
                <h5 style={{fontSize:'1.35em' }}>Address</h5>
                <p>Israel</p>
                <h5 style={{fontSize:'1.35em' }}>Phone</h5>
                <p>+972 55-9875495</p>
                <h5 style={{fontSize:'1.35em' }}>Email</h5>
                <p>kostiask@gmail.com</p>
                <h5 style={{fontSize:'1.35em' }}>View pdf file</h5>
                <a style={{fontSize:'0.75em', paddingBottom:'1em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1sVCeklaCglCU3E3E38WrcBdOG42gMM7M/view?usp=sharing"
                > click to View
            </a>
            </Col>

            <Col >
              <hr style={{ borderTop: "1px solid #e22947", width: "35vw" }} />
              <h1 style={{ margin: '1em' ,fontSize:'1.55em' }}>Education</h1>
              <Education
                startYear={2016}
                endYear={2020}
                schoolName={"Tel-Hai academic college"}
                degreeName={"Computer science B.sc"}
              />
              <br/>
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


              <hr style={{ borderTop: "1px solid #e22947", width: "35vw" }} />

              {/* <h4>Experience</h4>
            <Experience
              startYear={"Spring 2019"}
              endYear={"Fall 2019"}
              jobName={"Trainer For Junior Solver"}
              jobDesc={"Teach C Programming Language 1st year students"}
            /> */}

              {/* <hr style={{ borderTop: "2px solid #e22947" }} /> */}


              <h1 style={{ margin: '0.95em' , fontSize:'1.55em'}}>Skills</h1>

              <Skills skill={"Java"} progress={85} />
              <Skills skill={"JavaScript"} progress={90} />
              <Skills skill={"C++"} progress={80} />
              {/* <Skills skill={"C"} progress={70} /> */}
              <Skills skill={"React js"} progress={60} />
              <Skills skill={"Node js"} progress={65} />
              <Skills skill={"Express js"} progress={70} />
              <Skills skill={"MongoDB"} progress={55} />
              
              <hr style={{ borderTop: "1px solid #e22947", width: "35vw" }} />

              <div >
                <h1 style={{ margin: '0.5em' , fontSize:'1.55em'}}>Languages</h1>
                <ul style={{ listStyleType: 'none', marginRight: '1.95em' }}>
                  <li>English</li>
                  <li>Hebrew</li>
                  <li>Russian</li>
                  <li>Chinese</li>
                </ul>
              </div>
            </Col>
          </Row>
          </Container>
      </div>
    );
  }
}

export default Resume;
