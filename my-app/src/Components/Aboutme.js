import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import MyFooter from './miniComponents/MyFooter'

class Aboutme extends Component{
  render() {
     return (
    <div className='homepage-full'  > 
      <div className='' style={{ paddingTop: '1em' }}>
        <h1 className='secondary-Headers'>About me</h1>
        <Container >
        <Row style={{paddingTop:'1em'}}> 
          <Col style={{paddingLeft:'1em'}}>
            <p>Hi, my name is Kosta, I have been passionate and about computers 
               and Software since i can remember.
              </p>
          </Col>
          <Col>
            <img className='img-borders' style={{ height: "115pt" }}
              src="images/kosta.jpg" alt="avatar" />
          </Col>
        </Row>
        </Container>
      </div>


      <div className='' style={{ paddingTop: '2em' }}>
      <Container>
        <Row style={{paddingTop:'1em'}}> 
          <Col style={{paddingLeft:'1em'}}>
            <p >In highschool i studied in a main course electrincs and physics </p></Col>
          <Col>
          <img className='img-borders' style={{ height: "105pt" }}
          src="images/workingHome.jpeg" alt="avatar" />
          </Col>
        </Row>
        </Container>


        <div style={{ paddingTop: '2em' }}>
          <img className='img-borders' style={{ height: "105pt" }}
            src="images/workingHome.jpeg" alt="avatar" />
           <p>After my army service in the Isreli Navy i worked and lived in a kibbuz Yahel <br /><br />
            After some saving I did a eurotrip using mostly Couchsurfing.com visiting in:<br />
              <img className='img-borders' style={{ height: "105pt" }}
              src="images/workingHome.jpeg" alt="avatar" />
             England, Belgium, France, Poland, Czech Republic, Germany, Italy, Denmark,  Croatia, Austira,
             Slovakia, Netherlands,Swizerland and Hungary.<br /><br />
             ...... in 2012 i went to china and stayed untill 2016 Upone return to Israel i
              decided to fulfil my dream and went to study Computer Science</p>   <br/>

            <p>Since the start of my degree i have been ......
               Since graduating i....
                 .... few udemy courses and .... few projects</p>

           <img className='img-borders' style={{ height: "125pt" }}
             src="images/workingHome.jpeg" alt="avatar" />
        </div>

      <hr style={{ borderTop: "2px solid black", width: "25vw" }} />

        <div className='' style={{ paddingTop: '1em' }}>
          <h1 style={{fontSize:'1.75em'}}>My hobbies :  ......</h1>
          <p>Games i play: clash royale...... </p>
          <p>Since i have been a child i loved football, 15 years ago i played
                hattrick,  recently i started playing again...      </p>
        </div>


         <div style={{ paddingTop: '5em' }}>
            <br />
            <h1 style={{fontSize:'1.75em'}}>*******************</h1>
         </div>

     </div>


      <div style={{ paddingTop: '5em' }}>
      <MyFooter/>
      </div>

      
    </div>    //last Div
    ); }
}


export default Aboutme;
