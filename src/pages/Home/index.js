import './Home.css';
import React from "react";
//bootstrap dependencies
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

import {skills} from './../../data/skills'

const Home = () =>{
    return(
        <Row>
        <Col class = "maincol">
            <Card class = "card">
                <Card.Body>
                    <h1>
                        Who Am I?
                    </h1>
                    <p>
                        My name is Leonardo Conroy and I am a computer science major and sociology minor at Towson University.
                    </p>
                    <h4>
                        Where do I live?
                    </h4>
                    <p>
                        I currently live in Towson, MD.
                        {/* insert google map here */}
                    </p>
                    <h4>
                        What do I do?
                    </h4>
                    <p>
                        I develop front and back end software, using a variety of languages.
                    </p>
                </Card.Body>
            </Card>
        </Col>



        <Col id = "sidecol">
            <Card class = "sidecard">
                <h3>
                    My Skills
                </h3>


                
                <Accordion defaultActiveKey="1" flush>
                {skills.map(({ id, skill, desc }) => (
                    <Accordion.Item eventKey={id}>
                        <Accordion.Header>{skill}</Accordion.Header>
                        <Accordion.Body className = "accordion-panel">
                            {desc}
                        </Accordion.Body>
                    </Accordion.Item>

                ))}
                </Accordion>
            </Card>
        </Col>
        </Row>
    );
}
export default Home;