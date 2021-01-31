import React, { Component } from "react";
import ReactPlayer from 'react-player'
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
          <Card style={{ width: '20rem', margin: '3%' }}>
            <Card.Header>Portfolio Application</Card.Header>
            {/* <Card.Img variant="top" src="" /> */}
            <ReactPlayer width={'20rem'}
                height={220}
               url='https://youtu.be/xKjRKND1ABg' />

            <Card.Body>
              {/* <Card.Title>Elevator Simulation</Card.Title> */}
              <Card.Text>
                <br />
              A React JS Portfolio web Application
            <br />            <br />
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