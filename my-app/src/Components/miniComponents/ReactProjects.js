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
        <Container>
        <Row className="fix-in-center">
          {/*fullsatck app */}
          <Card style={{ width: '20rem', margin: '3%'}}>
            <Card.Header style={{background: '#303030',color:'#E9E9E9',fontWeight:'bolder', fontSize:'1.15em'}}>Portfolio Application</Card.Header>
            {/* <Card.Img variant="top" src="" /> */}
            <ReactPlayer width={'fill'}
                height={220}
               url='http://youtu.be/xKjRKND1ABg' />
            <Card.Body style={{ background: '#04ECF0'}}>
              {/* <Card.Title>Elevator Simulation</Card.Title> */}
              <Card.Text>
                <br />
              A React JS Portfolio web Application, using <b>React-bootstrap</b> and 
               <b> JSX</b>  
                      
              </Card.Text>
              <Button style={{ margin: "0 25px" }} variant="primary"
                onClick={this.githubLink.bind(this)} >Github</Button>
            </Card.Body>
          </Card>
        </Row>
        </Container>
      </div>
    );
  }
}

export default ReactProjects;