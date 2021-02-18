import React, { Component } from "react";
import ReactPlayer from 'react-player'
import { Card, Button, Row ,Container} from 'react-bootstrap';


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
      <div >
        <h1 className='secondary-Headers'>React JS Projects</h1>
        <Container>
        <Row className="fix-in-center">
          {/*fullsatck app */}
          <Card style={{ width: '18rem', margin: '1em'}}>
            <Card.Header style={{background: '#27221f',color:'#E9E9E9',fontWeight:'bolder', fontSize:'1.15em'}}>Portfolio Application</Card.Header>
            {/* <Card.Img variant="top" src="" /> */}
            <ReactPlayer width={'fill'}
                height={200}
               url='http://youtu.be/xKjRKND1ABg' />
            <Card.Body className='card-body'>
              {/* <Card.Title>Elevator Simulation</Card.Title> */}
              <Card.Text  style={{ height:'6rem' }}> 
                <br />
              A React JS Portfolio web Application, using <b>React-bootstrap</b> and 
               <b> JSX</b>   
               <br/>
                      
              </Card.Text>
              <Button style={{ margin: "0.25em" }} variant="primary"
                onClick={this.githubLink.bind(this)} >Github</Button>
            </Card.Body>
          </Card>
        </Row>
        </Container>
        <br/>
      </div>
    );
  }
}

export default ReactProjects;