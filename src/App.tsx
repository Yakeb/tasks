import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Author: Jakeb Milburn - Hello World</p>
            <h1 style={{ background: "green" }}>HTML and CSS task</h1>
            <Container>
                <Row>
                    <Col>
                        List of things better than JavaScript
                        <ul>
                            <li>dirt</li>
                            <li>taxes</li>
                            <li>literally anything</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                background: "red",
                                height: "100px",
                                width: "200px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img
                            src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            height="200"
                            width="300"
                            alt="A picture of a banana"
                        />
                        <div
                            style={{
                                background: "red",
                                height: "100px",
                                width: "200px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
