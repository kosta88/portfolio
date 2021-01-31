import React, { Component } from "react";

import { Card, Button, Row } from 'react-bootstrap';
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

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
                    <Card style={{ width: '20rem', margin: '3%' }}>
                        <Card.Header>FullStack Application</Card.Header>

                        <Player
                            playsInline
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            fluid={false}
                            width={'22rem'}
                            height={220}
                        />
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