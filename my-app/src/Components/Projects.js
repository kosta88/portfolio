import React from "react";
import { Tabs, Tab} from 'react-bootstrap';

import JavaProjects from './miniComponents/JavaProjects'
import ReactProjects from './miniComponents/ReactProjects'
import FullstackProjects from './miniComponents/FullStackProjects'
import MyFooter from './miniComponents/MyFooter'

export default function Projects () {
    return (
      <div className='homepage-full'>
          <Tabs className='Tabs' defaultActiveKey="JAVA" id="uncontrolled-tab" variant='dark' style={{ marginBottom: '0.5em', color:'white' }}>
            <Tab eventKey="JAVA" title="JAVA">
              <JavaProjects />
            </Tab>
            <Tab eventKey="REACT JS" title="REACT JS">
              <ReactProjects />
            </Tab>
            <Tab eventKey="FullStack" title="FullStack">
              <FullstackProjects />
            </Tab>
          </Tabs>
          <MyFooter/>
      </div>
    );
}
