import React, { Component } from "react";

import { Card, Button, Row } from 'react-bootstrap';

class ReactProjects extends Component {
  constructor(props) {
    super(props);

    this.githubLink = () => {
      window.location.assign(
        "https://github.com/kosta88/portfolio"
      );
    };
  }

  render() {
    return (
      <div className='homepage-grid'>
        <Row className="fix-in-center">
        {/*fullsatck app */}
        <Card style={{ width: '22rem', margin: '3%' }}>
          <Card.Header>Portfolio Application</Card.Header>
          <Card.Img variant="top" src="" />
          <Card.Body>
            {/* <Card.Title>Elevator Simulation</Card.Title> */}
            <Card.Text>
              This is .....................This is .....................This is .....................
            <br />
            This is .....................
            </Card.Text>
            <Button style={{ margin: "0 25px" }} raised variant="primary"
              onClick={this.githubLink.bind(this)} >Github</Button>
           
          </Card.Body>
        </Card>
        </Row>
      </div>
    );
  }
}

export default ReactProjects;