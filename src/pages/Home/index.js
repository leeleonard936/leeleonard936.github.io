import './Home.css';
import React from "react";
//bootstrap dependencies
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        My name is Leonardo Conroy and I am a computer science student at Towson University.
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
            </Card>
        </Col>
        </Row>
    );
}
export default Home;