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
                    <Col xs={4} sm={4} md={4} lg={4} xl={5}>
                        <p>{this.props.skill}</p>
                    </Col>

                    <Col xs={8} sm={8} md={8} lg={8} xl={7} style={{paddingTop:'3%'}}>
                        <ProgressBar animated='true' variant="success" now={this.props.progress} 
                        style={{width:'80%', height:'25%'}} />
                        </Col>
                        </Row>
                    </Container>
        );
    }
}

export default Skills;