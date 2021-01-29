import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';


class Education extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Col>
                    <Col>
                    <h5 style={{ marginTop: '0px' }}>{this.props.degreeName}</h5>
                    <p>{this.props.schoolName}</p>
                    </Col>
                </Row>
            </Container >        );
    }
}

export default Education;