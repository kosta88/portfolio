import React, { Component } from "react";

import { Tabs, Tab} from 'react-bootstrap';

import JavaProjects from './miniComponents/JavaProjects'
import ReactProjects from './miniComponents/ReactProjects'
// import CppProjects from './miniComponents/CppProjects'
import FullstackProjects from './miniComponents/FullStackProjects'

import MyFooter from './miniComponents/MyFooter'


class Projects extends Component {

  render() {
    return (
      <div className='homepage-full'>
          <Tabs className='Tabs' defaultActiveKey="JAVA" id="uncontrolled-tab" style={{ marginBottom: '2%' }}>
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

          <MyFooter/>
      </div>
    );
  }
}
export default Projects;
