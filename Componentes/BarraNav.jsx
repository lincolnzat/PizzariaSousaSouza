import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from 'react-bootstrap/NavDropdown';

function BarraNav() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img alt="" src="/src/assets/img/logo2.png" width="170" height="70" className="d-inline-block align-top" />{" "}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            </Nav>
          <Nav>
            <Nav.Link href="/Login"><Button variant="outline-secondary">Entrar</Button></Nav.Link>
            <Nav.Link eventKey={2} href="/CriarConta"><Button variant="dark">Criar conta</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default BarraNav
