import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="light">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            Symptoms Form
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="" className="text-decoration-none text-light mx-2">
              Home
            </NavLink>
            <NavLink to="/summery" className="text-decoration-none text-light">
              Summery
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
