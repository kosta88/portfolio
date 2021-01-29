import React, { Component } from "react";

import { Card, Button, Row } from 'react-bootstrap';

class JavaProjects extends Component {
  constructor(props) {
    super(props);

    this.elevatorSim = () => {
      window.location.assign(
        "https://github.com/kosta88/ElevatorSimulation"
      );
    };
    this.elevatorSimVideo = () => {
      window.location.assign(
        "https://github.com/kosta88/ElevatorSimulation"
      );
    };
    this.androidGame = () => {
      window.location.assign(
        "https://play.google.com/store/apps/details?id=spacesheep.example.androidfinalapp"
      );
    };
    this.androidGameVideo = () => {
      window.location.assign(
        "https://play.google.com/store/apps/details?id=spacesheep.example.androidfinalapp"
      );
    };
  }

  render() {
    return (
      <div className='homepage-grid'>
        <Row className="fix-in-center">
          {/*elevator sim */}
          <Card style={{ width: '18rem', margin: '3%' }}>
            <Card.Header>Elevator Simulation</Card.Header>
            <Card.Img variant="top" src="images/elevatorSim.png" />
            <Card.Body>
              {/* <Card.Title>Elevator Simulation</Card.Title> */}
              <Card.Text>
                This is .....................This is .....................This is .....................
            <br />
            This is .....................
            </Card.Text>
              <Button style={{ margin: "0 25px" }} raised variant="primary"
                onClick={this.elevatorSim.bind(this)} >Github</Button>
              <Button style={{ margin: "0 25px" }} raised
                onClick={this.elevatorSimVideo.bind(this)} >Video</Button>
            </Card.Body>
          </Card>

          {/* Android game */}
          <Card style={{ width: '22rem', margin: '3%' }}>
          <Card.Header>Android game</Card.Header>
            <Card.Img variant="top" src="images/android.jpg" />
            <Card.Body>
              {/* <Card.Title>Android game</Card.Title> */}
              <Card.Text>
                This is .....................This is .....................This is .....................
            <br />
            This is .....................
            </Card.Text>
              <Button style={{ margin: "0 25px" }} raised variant="primary"
                onClick={this.androidGame.bind(this)} >Google Play</Button>
              <Button style={{ margin: "0 25px" }} raised
                onClick={this.androidGameVideo.bind(this)} >Video</Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}

export default JavaProjects;