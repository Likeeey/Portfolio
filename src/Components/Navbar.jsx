import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-auto mb-4 border-0 focus" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>ABOUT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/education">
              <Nav.Link>EDUCATION</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/work">
              <Nav.Link>WORK EXPERIENCE</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>PROJECTS</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;