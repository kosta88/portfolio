import React, { Component } from "react";
import ReactPlayer from 'react-player'
import { Card, Button, Row } from 'react-bootstrap';


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
            <div className='homepage-grid'>
                <Row className="fix-in-center">
                    {/*fullsatck app */}
                    <Card style={{ width: '20rem', margin: '3%' }}>
                        <Card.Header>FullStack Application</Card.Header>
                        <ReactPlayer width={'20rem'}
                            height={220}
                            url='https://youtu.be/xKjRKND1ABg' />
                        <Card.Body>
                            {/* <Card.Title>Elevator Simulation</Card.Title> */}
                            <Card.Text>Frontend Application- React JS
                            <br /><br />
                            Backend Monolithic Application- Rest API, Node.js, Express.js, npm,
                               mongoDB, mongoose
                                          <br />
                            </Card.Text>
                            <Button style={{ margin: "0 25px" }} raised variant="primary"
                                onClick={this.appLink.bind(this)} >Link</Button>

                            {/* <Button style={{ margin: "0 25px" }} raised variant="primary"
                                onClick={this.appVideo.bind(this)} >Demo Video</Button> */}

                        </Card.Body>
                    </Card>
                </Row>
            </div>
        );
    }
}

export default FullstackProjects;