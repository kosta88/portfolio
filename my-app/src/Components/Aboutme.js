import React from "react";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import MyFooter from './miniComponents/MyFooter'

export default function Aboutme() {
  return (
    <div className='homepage-full'  >
      <h1 className='secondary-Headers' style={{ paddingTop: '0.75em' }}>About me</h1>
      <Container style={{width:'80%'}}>
        <Row style={{ paddingTop: '1em' }}>
          <Col >
            <p style={{ paddingTop: '1em' }} >I have been very passionate about<br />
               computers and programming since young age.
              </p><p style={{ paddingTop: '0.5em' }} >In highschool i studied
                <br /> in a main course of electronics and physics </p>
          </Col>
          <Col>
            <img className='img-borders' style={{ height: "105pt" }}
              src="images/young.jpg" alt="avatar" />
          </Col>
        </Row>


        <Row style={{ paddingTop: '1.5em' }}>
          <Col >
            <p style={{ paddingTop: '1.5em' }} >After HighSchool i served 3 years<br /> in the Israeli Navy </p></Col>
          <Col>
            <img className='img-borders' style={{ height: "105pt" }}
              src="images/army.jpg" alt="avatar" /> </Col>
        </Row>


        <Row style={{ paddingTop: '2.5em' }}>
          <Col>
            <p >After my army service I've walked the Israeli National Trail with friends</p>

            <img className='img-borders' style={{ height: "105pt" }}
              src="images/startshvil.jpg" alt="avatar" />
          </Col>
        </Row>


        <Row style={{ paddingTop: '2.5em' }}>
          <Col>
            <img style={{ height: "255pt" }}
              src="images/mix.png" alt="avatar" /> </Col>
          <Col >
            <p style={{ paddingTop: '1em' }} >for two years I lived and worked in a kibbuz Yahel 
            <br />(a kibbuz in the south of Israel)</p>

            <p style={{ paddingTop: '4.5em' }}> 
            And after some saving I did a eurotrip <br />mostly using Couchsurfing.com visiting in:
             England, Belgium, France, Poland, Czech Republic, Germany, Italy, Denmark,  Croatia, Austira,
             Slovakia, Netherlands,Swizerland and Hungary.
            </p>
          </Col>
        </Row>

        <Row style={{ paddingTop: '2.5em' }}>
          <Col>
            <img className='img-borders' style={{ height: "105pt" }}
              src="images/china.jpg" alt="avatar" /> </Col>
          <Col >
            <p style={{ paddingTop: '2em' }}> In 2012 i went to china and ....................</p> 
          </Col>
        </Row>

        <Row style={{ paddingTop: '2.5em' }}>
          <Col>
            <img className='img-borders' style={{ height: "105pt" }}
              src="images/workingHome.jpeg" alt="avatar" /> </Col>
          <Col >
            <p style={{ paddingTop: '1em' }}> Upone return to Israel i
              decided to fulfil my dream and study Computer Science</p>   <br />
            <p >Since the start of my degree i have been ......
            Since graduating i....
                 .... few udemy courses and .... few projects</p>
          </Col>
        </Row>
      </Container>


      <img className='img-borders' style={{ height: "125pt", marginTop: '2.5em' }}
        src="images/workingHome.jpeg" alt="avatar" />
      <hr style={{ borderTop: "0.5px solid black", width: "25vw" }} />

      <div style={{ paddingTop: '1em' }}>
        <h1 style={{ fontSize: '1.15em' }}>My hobbies :  ......</h1>
        <p>Games i play: clash royale...... </p>
        <p>Since i have been a child i loved football, 15 years ago i played
            hattrick,  recently i started playing again...      </p>
      </div>

      <div style={{ paddingTop: '2em' }}>
        <h1 style={{ fontSize: '1.25em' }}>*******************</h1>
        <MyFooter />
      </div>

    </div>    //last Div
  );
}
