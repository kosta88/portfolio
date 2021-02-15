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
                <Container fluid>                
                <Row>
                    <Col>
                        <p>{this.props.skill}</p>
                    </Col>
                    <Col>
                        <ProgressBar animated='true' variant="success" now={this.props.progress}
                            style={{ width: '22vw' }} />
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Skills;