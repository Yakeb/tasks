import React from "react";
import "./App.css"; 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Author: Jakeb Milburn - Hello World</p>
            <header>
                HTML and CSS task
            </header>
            <Container>
            <Row>
                <Col>
                    List of things better than JavaScript
                    <ul>
                        <li>dirt</li>
                        <li>taxes</li>
                        <li>literally anything</li>
                    </ul>
                </Col>
                <Col>
                    Second column.
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default App;
