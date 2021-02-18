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
          <Card style={{ width: '18rem', margin: '1em'}}>
            <Card.Header style={{background: '#27221f',color:'#E9E9E9',fontWeight:'bolder', fontSize:'1.15em'}}>Portfolio Application</Card.Header>
            {/* <Card.Img variant="top" src="" /> */}
            <ReactPlayer width={'fill'}
              height={200}
               url='http://youtu.be/xKjRKND1ABg' />
            <Card.Body className='card-body'>
              <Card.Text  style={{ height:'6rem' }}> 
                <br />
              A React JS Portfolio web Application, using <b>React-bootstrap</b> and 
               <b> JSX</b> 

               <br />
              A React JS Portfolio web Application, using <b>React-bootstrap</b> and 
               <b> JSX</b> 
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

