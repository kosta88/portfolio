import React, { Component } from "react";

import { } from 'react-bootstrap';

function Aboutme(){
    return (
      <div className='homepage-grid'>
        <div className='color-text-grid' 
        style={{ margin: '10%', padding: '3%',borderRadius:'20%' }}>

          <h1 style={{  color: 'khaki', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif' }}>
            Sklonnie Konstantin</h1>
          <p style={{ textAlign: 'justify', color: 'khaki', fontFamily: 'Oxygen, sans-serif' }}>
            Hi, i am kosta sklonnie.
          <br />
          A recent computer science graduate, with high motivation to put my current knowledge into use
          <br /> and great passion to learn and explore new technologies
        </p>
        </div>
      </div>
    );
}


export default Aboutme;
