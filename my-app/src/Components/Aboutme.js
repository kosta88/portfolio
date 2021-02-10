import React, { Component } from "react";

import { } from 'react-bootstrap';

function Aboutme() {
  return (
    <div className='homepage-full' >


      <div className='' style={{ paddingTop: '1%' }}>
        <h1 >About me</h1>
        <hr style={{ borderTop: "1px solid black", width: "35%" }} />
        <h4 >Sklonnie Konstantin</h4>
        <img className='img-borders' style={{ height: "125pt" }}
          src="images/kosta.jpg" alt="avatar" />
      </div>

      <div className='' style={{ paddingTop: '1%' }}>
        <p>I have been passionate and about computers since i can remember.
          In highschool i studied in a main course electrincs and physics</p>

        <p>After my army service in the Isreli Navy i worked and lived in a kibbuz Yahel <br /><br />
        After some saving I did a eurotrip using mostly Couchsurfing.com visiting in:<br />
         England, Belgium, France, Poland, Czech Republic, Germany, Italy, Denmark,  Croatia, Austira,
          Slovakia, Netherlands,Swizerland and Hungary.<br /><br />
        ...... in 2012 i went to china and stayed untill 2016 Upone return to Israel i
        decided to fulfil my dream and went to study Computer Science</p>

        <img className='img-borders' style={{ height: "105pt" }}
          src="images/workingHome.jpeg" alt="avatar" />

        <p>Since the start of my degree i have been ......
        Since graduating i....
            .... few udemy courses and .... few projects</p>

        <img className='img-borders' style={{ height: "125pt" }}
          src="images/workingHome.jpeg" alt="avatar" />
      </div>
      <hr style={{ borderTop: "1px solid black", width: "75%" }} />

      <div className='' style={{ paddingTop: '1%' }}>
        <h5>My hobbies :  ......</h5>
        <p>Games i play: clash royale......
        Since i have been a child i loved football, 15 years ago i played
                hattrick,  recently i started playing again...</p>
      </div>


      <div style={{ paddingTop: '10%' }}>
        <br/>
        <h1>*******************</h1>
      </div>


    </div>    //last Div
  );
}


export default Aboutme;
