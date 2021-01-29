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
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <p>{this.props.skill}</p>
                    </Col>

                    <Col sm={7} style={{paddingTop:'3%'}}>
                        <ProgressBar variant="success" now={this.props.progress} />
                        </Col>
                        </Row>
                    </Container>
        );
    }
}

export default Skills;