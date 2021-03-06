import React from "react";
import ReactPlayer from 'react-player'
import { Card, Button, Row, Container } from 'react-bootstrap';

export default function JavaProjects () {
    return (
      <div >
        <h1 className='secondary-Headers'>JAVA Projects</h1>
        <Container>
          <Row className="fix-in-center">

            {/*elevator sim */}
            <Card className='Card'>
              <Card.Header className='Card-Header'>Elevator Simulation</Card.Header>
              <ReactPlayer width={'fill'}
                height={200}
                url='http://youtu.be/xKjRKND1ABg' />
              <Card.Body className='card-body' >
                <Card.Text style={{ height:'6.5rem' }}>
                  A <b>Java</b> Simulation implementing different scheduling algorithms 
                  which are compared by the waiting and execution time of simulated passengers
                </Card.Text>
                <Button style={{ margin: "0.25em" }} variant="primary"
                  onClick={() => {window.location.assign(
                    "https://github.com/kosta88/ElevatorSimulation"
                  );}} >Github</Button>
              </Card.Body>
            </Card>

            {/* Android game */}
            <Card  className='Card'>
              <Card.Header className='Card-Header'>Android game</Card.Header>
              <ReactPlayer width={'fill'}
                height={200}
                volume={0.05}
                url='http://youtu.be/egN2o8vE4vo' />
              <Card.Body className='card-body'>
                <Card.Text style={{ height:'6.5rem' }}>
                  <br />  An android game application written in AndroidStudio 
                  using <b>Java, XML</b> and <b>FireBase</b>  <br />          
                </Card.Text>
                <Button style={{ margin: "0.25em" }} variant="primary"
                  onClick={() => { window.location.assign(
                    "https://play.google.com/store/apps/details?id=spacesheep.example.androidfinalapp"
                  );}} >Google Play</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    );
}

