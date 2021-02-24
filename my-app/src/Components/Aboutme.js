import React from "react";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import MyFooter from './miniComponents/MyFooter'

export default function Aboutme() {
  return (
    <div className='aboutme-full'  >
      <Container style={{ textAlign: 'center' }}>
        <h1 className='secondary-Headers' style={{ paddingTop: '0.75em' }}>About me</h1>
        <Row style={{ paddingTop: '1em' }}>
          <Col >
            <p style={{ paddingTop: '1em' }} >I have been very passionate about<br />
               computers and programming since young age
              </p><p style={{ paddingTop: '0.5em' }} >In highschool i chose to study
                <br /> in the main course of <br />electronics and physics </p>
          </Col>
          <Col style={{ marginRight: '2em' }}>
            <img className='img-borders' style={{ height: "80pt" }}
              src="images/young.jpg" alt="avatar" />
          </Col>
        </Row>

        <Row style={{ paddingTop: '0.25em' }}>
          <Col >
            <p style={{ paddingTop: '1.5em' }} >After HighSchool i served 3 years<br /> in the logistics
            unit of<br /> the Israeli Navy </p></Col>
          <Col style={{ marginRight: '1em' }}>
            <img className='img-borders' style={{ height: "85pt" }}
              src="images/army.jpg" alt="avatar" /> </Col>
        </Row>

        <Row style={{ paddingTop: '1.5em' }}>
          <Col>
            <p >After my army service I've walked the<br /> Israeli National Trail with friends</p>
            <img className='img-borders' style={{ height: "110pt" }}
              src="images/startshvil.jpg" alt="avatar" />
          </Col>
        </Row>

        <Row style={{ paddingTop: '2.5em' }}>
          <Col>
            <img style={{ height: "255pt" }}
              src="images/mix.png" alt="avatar" /> </Col>
          <Col >
            <p style={{ paddingTop: '1em' }} >for two years I lived and worked<br /> in a kibbuz Yahel
            <br />(a kibbuz in the south of Israel)</p>

            <p style={{ paddingTop: '4.5em' }}>
              and after some saving I did a eurotrip <br />mostly using Couchsurfing.com visiting in:
             England, Belgium, France, Poland, Czech Republic, Germany, Italy, Denmark,  Croatia, Austira,
             Slovakia, Netherlands,Swizerland and Hungary
            </p>
          </Col>
        </Row>

        <Row style={{ paddingTop: '2.5em' }}>
          <Col>
            <img className='img-borders' style={{ height: "85pt" }}
              src="images/china.jpg" alt="avatar" /> </Col>
          <Col >
            <p > In 2012 i went to china and stayed<br />
            to study chinese and<br /> to teach some English until 2016 </p>
            <p style={{ fontSize: '1em' }}>活到老学到老 <br />
            ("Study as long as you live")</p>
          </Col>
        </Row>

        <Row style={{ paddingTop: '2em' }}>
          <Col>
            <p > Upone my return to Israel<br /> i
              went on fulfiling my dream and studying Computer Science</p>
            <img style={{ height: "225pt" }}
              src="images/college.png" alt="avatar" /> </Col>
        </Row>
        <Row style={{ paddingTop: '3em' }}>
          <Col>
            <p style={{ paddingTop: '0.55em' }}>Since my graduation i took a few udemy
             courses<br /> and made a few projects</p>

            <p style={{ fontSize: '0.9em' }}>I have improved my <b>JavaScript, npm, Node.js, Express.js, Git </b>
             and <b>Java </b> knowledge and skill
             and i have learned and used new technologies like: </p>

            <p style={{ fontSize: '0.9em' }}><b>Postman, MongoDB, axios, Microservices</b> and <b>Heroku</b></p>
          </Col>
          <Col>
            <img className='img-borders' style={{ height: "120pt", marginTop: '0.75em' }}
              src="images/workingHome.jpeg" alt="avatar" />
          </Col>
        </Row>
        <hr style={{ borderTop: "0.5px solid black", width: "25vw", marginTop: '3.5em', opacity: '35%' }} />
      </Container>
      <Container>
        <div style={{ marginTop: '0.25em', paddingLeft: '2.5em' }}>
          <h1 style={{ fontSize: '1.25em' }}>My hobbies:</h1>
          <div style={{ paddingTop: '0.25em', paddingLeft: '2.5em' }}>
            <p>I love Reading, Learning new things, Coding and Football</p>

            <p>my favorite Israeli Football Team: <b>Hapoel Ironi Kiryat Shmona F.C</b>
              <img style={{ height: "30pt", marginLeft: '0.5em' }}
                src="images/shemona.png" alt="avatar" /> </p>

            <p>my favorite International Football Team: <b>Manchester United F.C</b>
              <img style={{ height: "30pt", marginLeft: '0.5em' }}
                src="images/manUTD.png" alt="avatar" /> </p>
          </div>
        </div>
      </Container>
      <div style={{ paddingTop: '2em' }}>
        <MyFooter />
      </div>
    </div>    //last Div
  );
}
