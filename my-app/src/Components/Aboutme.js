import React from "react";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import MyFooter from './miniComponents/MyFooter'

export default function Aboutme () {
    return (
      <div className='homepage-full'  >

        <div style={{ paddingTop: '0.75em' }}>
          <h1 className='secondary-Headers'>About me</h1>
          <Container >
            <Row style={{ paddingTop: '1em' }}>
              <Col style={{ paddingLeft: '1em' }}>
                <p style={{ paddingTop: '1em' }} >I have been very passionate about<br />
               computers and programming since very young age.
              </p>
              </Col>
              <Col>
                <img className='img-borders' style={{ height: "115pt" }}
                  src="images/kosta.jpg" alt="avatar" />
              </Col>
            </Row>
          </Container>
        </div>

        <div style={{ paddingTop: '2em' }}>
          <Container>
            <Row style={{ paddingTop: '1em' }}>
              <Col>
                <img className='img-borders' style={{ height: "105pt" }}
                  src="images/workingHome.jpeg" alt="avatar" /> </Col>
              <Col >
                <p style={{ paddingTop: '1em' }} >In highschool i studied<br /> in a main course electronics and physics </p></Col>
            </Row>
          </Container>
        </div>

        <div style={{ paddingTop: '2em' }}>
          <Container>
            <p style={{ paddingTop: '1em' }}>After my army service in the Isreli Navy i have decided to walk the Israeli National
            Trail with friends</p>
            <br />
            <img className='img-borders' style={{ height: "105pt" }}
              src="images/workingHome.jpeg" alt="avatar" />
          </Container>
        </div>

        <div style={{ paddingTop: '2em' }}>
          <Container>
            <Row style={{ paddingTop: '1em' }}>
              <Col>
                <img className='img-borders' style={{ height: "105pt" }}
                  src="images/workingHome.jpeg" alt="avatar" /> </Col>
              <Col >
                <p>    worked and lived in a kibbuz Yahel <br /><br />
            After some saving I did a eurotrip using mostly Couchsurfing.com visiting in:
             England, Belgium, France, Poland, Czech Republic, Germany, Italy, Denmark,  Croatia, Austira,
             Slovakia, Netherlands,Swizerland and Hungary.<br /><br />
             ...... in 2012 i went to china and stayed untill 2016 Upone return to Israel i
              decided to fulfil my dream and went to study Computer Science</p>   <br />
                <p>Since the start of my degree i have been ......
                Since graduating i....
                 .... few udemy courses and .... few projects</p>
              </Col>
            </Row>
          </Container>
        </div>

        <img className='img-borders' style={{ height: "125pt", marginTop:'2.5em'}}
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
