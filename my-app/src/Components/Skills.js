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
                    <Col>
                        <p>{this.props.skill}</p>
                    </Col>

                    <Col style={{paddingTop:'4%'}}>
                        <ProgressBar animated='true' variant="success" now={this.props.progress} 
                        style={{width:'80%', height:'25%'}} />
                        </Col>
                        </Row>
                    </Container>
        );
    }
}

export default Skills;