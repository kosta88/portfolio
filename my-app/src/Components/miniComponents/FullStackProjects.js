import React from "react";
import ReactPlayer from 'react-player'
import { Card, Button, Row, Container } from 'react-bootstrap';

export default function FullstackProjects () {
        return (
            <div >
                <h1 className='secondary-Headers'>FullStack Projects</h1>
                <Container>
                    <Row className="fix-in-center">
                        {/*fullsatck app */}
                        <Card style={{ width: '18rem', margin: '1em' }}>
                            <Card.Header style={{ background: '#27221f', color: '#E9E9E9', fontWeight: 'bolder',
                             fontSize: '1.15em' }}>WebTrivia Application</Card.Header>
                            <ReactPlayer width={'fill'}
                                height={200}
                                url='http://youtu.be/xKjRKND1ABg' />
                            <Card.Body className='card-body'>
                                {/* <Card.Title>Elevator Simulation</Card.Title> */}
                                <Card.Text style={{ height:'6rem' }} >
                                    all use: <b>Node.JS, npm</b><br/>
                                    Frontend- <b>React JS, axios and React-bootstrap</b>
                                    <br />
                            Backend- <b>Rest API, Postman, Express.JS, mongoDB, mongoose</b>
                                </Card.Text>
                                <Button style={{ margin: "0.25em" }} variant="primary"
                                        onClick={ () => {window.location.assign(
                                            "https://webtrivia.herokuapp.com/"
                                        );} } >Visit</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        );
}

