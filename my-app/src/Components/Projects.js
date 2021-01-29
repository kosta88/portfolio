import React, { Component } from "react";

import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap';


import JavaProjects from './miniComponents/JavaProjects'
import ReactProjects from './miniComponents/ReactProjects'
import CppProjects from './miniComponents/CppProjects'
import FullstackProjects from './miniComponents/FullStackProjects'

class Projects extends Component {

  render() {
    return (
      <div >
          <Tabs  className='Tabs' defaultActiveKey="JAVA" id="uncontrolled-tab" style={{  }}>
            <Tab eventKey="JAVA" title="JAVA">
              <JavaProjects />
            </Tab>
            <Tab eventKey="REACT JS" title="REACT JS">
              <ReactProjects />
            </Tab>
            <Tab eventKey="FullStack" title="FullStack">
              <FullstackProjects />
            </Tab>
{/* 
            <Tab eventKey="Cpp" title="Cpp">
              <CppProjects />        
            </Tab> */}

          </Tabs>
      </div>
    );
  }
}
export default Projects;
