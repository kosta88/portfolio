import React, { Component } from "react";

import { Card, Button, Row } from 'react-bootstrap';
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

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
        <Card style={{ width: '20rem', margin: '3%' }}>
          <Card.Header>Portfolio Application</Card.Header>
          {/* <Card.Img variant="top" src="" /> */}
          <Player
                playsInline
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                fluid={false}
                width={'22rem'}
                height={220}
              />

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