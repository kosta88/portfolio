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
      <div >
        <Container>
          <Row className="fix-in-center">
            {/*elevator sim */}
            <Card style={{ width: '20rem', margin: '3%' }}>
              <Card.Header style={{ background: '#303030', color: '#E9E9E9', fontWeight: 'bolder' }} >Elevator Simulation</Card.Header>
              <ReactPlayer width={'fill'}
                height={220}
                url='http://youtu.be/xKjRKND1ABg' />
              <Card.Body style={{ background: '#04ECF0' }}>
                <Card.Text>
                  A <b>Java</b> Simulation
                  implementing different
                  scheduling algorithms which are compared by the waiting and execution time of simulated passengers
                </Card.Text>
                <Button style={{ margin: "0 25px" }} variant="primary"
                  onClick={this.elevatorSim.bind(this)} >Github</Button>
              </Card.Body>
            </Card>

            {/* Android game */}
            <Card style={{ width: '20rem', margin: '3%' }}>
              <Card.Header style={{ background: '#303030', color: '#E9E9E9', fontWeight: 'bolder' }}>Android game</Card.Header>
              <ReactPlayer width={'fill'}
                height={220}
                volume={0.05}
                url='http://youtu.be/egN2o8vE4vo' />
              <Card.Body style={{ background: '#04ECF0' }}>
                <Card.Text>
                  <br />
                  An android game application written in AndroidStudio using <b>Java</b> and <b>FireBase</b>
            <br />            <br />
                </Card.Text>
                <Button style={{ margin: "0 25px" }} variant="primary"
                  onClick={this.androidGame.bind(this)} >Google Play</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default JavaProjects;