import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export const NavbarUser = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="d-flex flex-column">
          <span className="text-white fs-3 me-3">Alberto Céspedes</span>
          <span className="text-secondary fs-6"> | FULL-STACK DEVELOPER</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/about"}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to={"/projects"}>
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to={"/skills"}>
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to={"/contact"}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
