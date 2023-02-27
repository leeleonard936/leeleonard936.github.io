import './Home.css';
import React from "react";
//bootstrap dependencies
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () =>{
    return(
        <Card class = "card">
            <Card.Body>
                <h1>
                    Who Am I?
                </h1>
                <p>
                    My name is Leonardo Conroy and I am a computer science student at Towson University.
                </p>
                <h4>
                    Where do you live?
                </h4>
                <p>
                    I currently live in Towson, MD.
                    {/* insert google map here */}
                </p>
            </Card.Body>
        </Card>
    );
}
export default Home;