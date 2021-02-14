import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import MyFooter from './miniComponents/MyFooter'


function Aboutme() {
  return (
    <div className='homepage-full' >


      <div className='' style={{ paddingTop: '1%' }}>
        <h1 >About me</h1>
        <hr style={{ borderTop: "2px solid black", width: "25%" }} />
        <Container>
        <Row style={{paddingTop:'2%'}}> 
          <Col style={{paddingLeft:'2%'}}>
            <h5 >Hi, my name is Kosta, I have been passionate and about computers 
               and Software since i can remember.
              
              </h5></Col>
          <Col>
            <img className='img-borders' style={{ height: "125pt" }}
              src="images/kosta.jpg" alt="avatar" />
          </Col>
        </Row>
        </Container>
      </div>


      <div className='' style={{ paddingTop: '3%' }}>
      <Container>
        <Row style={{paddingTop:'2%'}}> 
          <Col style={{paddingLeft:'2%'}}>
            <h5 >In highschool i studied in a main course electrincs and physics
              
              </h5></Col>
          <Col>
          <img className='img-borders' style={{ height: "105pt" }}
          src="images/workingHome.jpeg" alt="avatar" />
          </Col>
        </Row>
        </Container>


        <div style={{ paddingTop: '3%' }}>
        <img className='img-borders' style={{ height: "105pt" }}
          src="images/workingHome.jpeg" alt="avatar" />
        <h5>After my army service in the Isreli Navy i worked and lived in a kibbuz Yahel <br /><br />
        After some saving I did a eurotrip using mostly Couchsurfing.com visiting in:<br />
        <img className='img-borders' style={{ height: "105pt" }}
          src="images/workingHome.jpeg" alt="avatar" />
         England, Belgium, France, Poland, Czech Republic, Germany, Italy, Denmark,  Croatia, Austira,
          Slovakia, Netherlands,Swizerland and Hungary.<br /><br />
        ...... in 2012 i went to china and stayed untill 2016 Upone return to Israel i
        decided to fulfil my dream and went to study Computer Science</h5>

      <br/>
        <h5>Since the start of my degree i have been ......
        Since graduating i....
            .... few udemy courses and .... few projects</h5>

        <img className='img-borders' style={{ height: "125pt" }}
          src="images/workingHome.jpeg" alt="avatar" />
      </div>




      <hr style={{ borderTop: "2px solid black", width: "35%" }} />



      <div className='' style={{ paddingTop: '1%' }}>
        <h3>My hobbies :  ......</h3>
        <h5>Games i play: clash royale......
       </h5>
                <h5>
                Since i have been a child i loved football, 15 years ago i played
                hattrick,  recently i started playing again...
                </h5>
      </div>


      <div style={{ paddingTop: '10%' }}>
        <br />
        <h1>*******************</h1>
      </div>


      </div>
      {/* <MyFooter/> */}

    </div>    //last Div
  );
}


export default Aboutme;
