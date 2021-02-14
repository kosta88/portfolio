import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    ProgressBar,
} from 'react-bootstrap';

class Skills extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={5}>
                        <p>{this.props.skill}</p>
                    </Col>

                    <Col xs={7}>
                        <ProgressBar animated='true' variant="success" now={this.props.progress} 
                        style={{width:'80%', height:'25%'}} />
                        </Col>
                        </Row>
                    </div>
        );
    }
}

export default Skills;