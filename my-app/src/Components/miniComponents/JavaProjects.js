import React, { Component } from "react";
import ReactPlayer from 'react-player'
import { Card, Button, Row, Container } from 'react-bootstrap';

class JavaProjects extends Component {
  constructor(props) {
    super(props);
    this.elevatorSim = () => {
      window.location.assign(
        "https://github.com/kosta88/ElevatorSimulation"
      );
    };
    this.androidGame = () => {
      window.location.assign(
        "https://play.google.com/store/apps/details?id=spacesheep.example.androidfinalapp"
      );
    };
  }

  render() {
    return (
      <div className='homepage-max' >
        <Container fluid>
          <Row className="fix-in-center">
            {/*elevator sim */}
            <Card style={{ background: 'beige', width: '20rem', margin: '3%' }}>
              <Card.Header>Elevator Simulation</Card.Header>
              <ReactPlayer width={'20rem'}
                height={220}
                url='https://youtu.be/xKjRKND1ABg' />
              <Card.Body>
                <Card.Text>
                  implementing different Elevators and different
                  scheduling algorithms which are compared by the waiting and execution time of simulated passengers
                </Card.Text>
                <Button style={{ margin: "0 25px" }} raised variant="primary"
                  onClick={this.elevatorSim.bind(this)} >Github</Button>
              </Card.Body>
            </Card>

            {/* Android game */}
            <Card style={{ background: 'beige', width: '20rem', margin: '3%' }}>
              <Card.Header >Android game</Card.Header>
              <ReactPlayer width={'20rem'}
                height={220}
                volume={0.1}
                url='https://youtu.be/egN2o8vE4vo' />
              <Card.Body>
                <Card.Text>
                  <br />
                  An android game application written in AndroidStudio using Java and FireBase
            <br />            <br />
                </Card.Text>
                <Button style={{ margin: "0 25px" }} raised variant="primary"
                  onClick={this.androidGame.bind(this)} >Google Play</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
        <br />   <br />          <br />    <br />          <br /> <br />    <br /> <br />          <br />
        <p></p>
      </div>
    );
  }
}

export default JavaProjects;