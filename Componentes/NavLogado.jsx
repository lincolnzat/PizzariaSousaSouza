import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";




function NavbarLogado() {
    return (
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img alt="" src="/src/assets/img/logo2.png" width="170" height="70" className="d-inline-block align-top" />{" "}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/Produtos">Produtos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}

export default NavbarLogado