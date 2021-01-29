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
                    <Col xs={1} sm={2} md={3} lg={3} xl={4}>
                        <p>{this.props.skill}</p>
                    </Col>

                    <Col xs={2} sm={4} md={6} lg={6} xl={7} style={{paddingTop:'3%'}}>
                        <ProgressBar variant="success" now={this.props.progress} />
                        </Col>
                        </Row>
                    </Container>
        );
    }
}

export default Skills;