import React from "react";
import ReactPlayer from 'react-player'
import { Card, Button, Row ,Container} from 'react-bootstrap';


export default function ReactProjects () {
    return (
      <div >
        <h1 className='secondary-Headers'>React JS Projects</h1>
        <Container>
        <Row className="fix-in-center">
          {/*fullsatck app */}
          <Card  className='Card'>
            <Card.Header className='Card-Header'>Portfolio WebApplication</Card.Header>
            <Card.Img variant="top" src="images/reactProjectIMG.jpg" />
            <Card.Body className='card-body'>
              <Card.Text  style={{ height:'6.5rem' }}> 
                <br />
              A <b>React JS </b> Portfolio web Application, using <b>Node.JS, npm, CSS, </b>  and <b>React-bootstrap </b>
              </Card.Text>
              <Button style={{ margin: "0.25em" }} variant="primary"
                onClick={ () => {window.location.assign(
                  "https://github.com/kosta88/portfolio"
                );} } >Github</Button>
            </Card.Body>
          </Card>
        </Row>
        </Container>
        <br/>
      </div>
    );
}

