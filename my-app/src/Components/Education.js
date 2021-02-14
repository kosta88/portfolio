import React, { Component } from 'react';
import {
    Row,
    Col,
} from 'react-bootstrap';


class Education extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={4} sm={4} md={4} lg={4} xl={5}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={7} >
                        <h5 style={{ marginTop: '0px' }}>{this.props.degreeName}
                        </h5>
                        <p>{this.props.schoolName}</p>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Education;