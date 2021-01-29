import React, { Component } from "react";

import { Card, Button, Row } from 'react-bootstrap';

class FullstackProjects extends Component {
    constructor(props) {
        super(props);

        this.appLink = () => {
            window.location.assign(
                "https://github.com/kosta88/portfolio"
            );
        };
        this.appVideo = () => {
            window.location.assign(
                "*******************"
            );
        };
    }

    render() {
        return (
            <div className='homepage-grid'>
                <Row className="fix-in-center">
                    {/*fullsatck app */}
                    <Card style={{ width: '22rem', margin: '2%' }}>
                        <Card.Header>FullStack ...blabla... Application</Card.Header>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            {/* <Card.Title>Elevator Simulation</Card.Title> */}
                            <Card.Text>
                                This is .....................This is .....................This is .....................
            <br />
            This is .....................
            </Card.Text>
                            <Button style={{ margin: "0 25px" }} raised variant="primary"
                                onClick={this.appLink.bind(this)} >Link</Button>
                            <Button style={{ margin: "0 25px" }} raised variant="primary"
                                onClick={this.appVideo.bind(this)} >Demo Video</Button>

                        </Card.Body>
                    </Card>
                </Row>
            </div>
        );
    }
}

export default FullstackProjects;