import React, { Component } from "react";
import ReactPlayer from 'react-player'
import { Card, Button, Row, Container } from 'react-bootstrap';

class FullstackProjects extends Component {
    constructor(props) {
        super(props);

        this.appLink = () => {
            window.location.assign(
                "https://sleepy-retreat-99562.herokuapp.com/"
            );
        };
    }
    render() {
        return (
            <div >
                <Container>
                    <Row className="fix-in-center">
                        {/*fullsatck app */}
                        <Card style={{ width: '20rem', margin: '3%' }}>
                            <Card.Header style={{background: '#303030',color:'#E9E9E9', fontWeight: 'bolder', fontSize:'1.15em' }}>Social Trivia Application</Card.Header>
                            <ReactPlayer width={'fill'}
                                height={220}
                                url='http://youtu.be/xKjRKND1ABg' />
                            <Card.Body style={{ background: '#04ECF0' }}>
                                {/* <Card.Title>Elevator Simulation</Card.Title> */}
                                <Card.Text>Frontend - <b>React JS</b>, <b>axios</b> and <b>React-bootstrap</b>
                            <br /><br />
                            Backend - <b>Rest API</b>, <b>Node.js</b>, <b>Express.js</b>, npm,
                               mongoDB, mongoose
                                          
                                </Card.Text>
                                <Button style={{ margin: "0 25px" }} variant="primary"
                                    onClick={this.appLink.bind(this)} >Link</Button>
                                {/* <Button style={{ margin: "0 25px" }} raised variant="primary"
                                onClick={this.appVideo.bind(this)} >Demo Video</Button> */}
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FullstackProjects;