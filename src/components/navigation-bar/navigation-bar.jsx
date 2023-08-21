import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

import "./navigation-bar.scss";

function Navigation() {
  return (
    <Navbar className="nav-bar" 
    styyle={{
        border: "0px solid rgba(0, 0, 0, 0)", 
        backgroundColor: "rgba(0, 0, 0, 0)"
    }} >
      <Container>
          <Nav className="nav-links ms-auto" >
            <Nav.Link style={{ fontFamily: "'Lilita One', cursive;", color: "#C5EDF2", fontWeight: "700"}} as={Link} to="/">Home</Nav.Link>
            <Nav.Link style={{ color: "#C5EDF2", fontWeight: "700"}} as={Link} to="https://www.linkedin.com/in/sammy-weller/">LinkedIn</Nav.Link>
            <Nav.Link style={{ color: "#C5EDF2", fontWeight: "700"}} as={Link} to="https://github.com/sammyweller" >GitHub</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;