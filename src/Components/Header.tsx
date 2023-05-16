import React, { Component } from "react";
import { render } from '@testing-library/react';
import { Container, Nav, Navbar } from "react-bootstrap";


export default class Header extends Component {
    render(){
        return(
        <Navbar className="justify-content-center" style={{backgroundColor: "#0d1117"}}>
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" style={{color: "#6b7688"}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{color: "#6b7688"}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{color: "#6b7688"}}>Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            )
    }
  


}
