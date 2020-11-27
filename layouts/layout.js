import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'

export default function Layout({children}) {
    return (
        <div>
        <header>
            <Container>
                <Row>
                Hi My Name Is Tim
                </Row>
            </Container>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/sitecore">Sitecore</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
        {children}
        <footer>
            <Container>
                <Row>
                    <Col sm="4">
                        <h3>About Me</h3>
                        </Col>
                        <Col sm="4">
                        <h3>About Me</h3>
                        </Col>
                        <Col sm="4">
                        <h3>About Me</h3>
                        </Col>                
                    </Row>
                </Container>
        </footer>
        </div>
    )
}