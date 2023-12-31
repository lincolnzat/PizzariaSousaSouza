import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";




function NavbarInicial() {
    return (
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img alt="" src="/src/assets/img/logo2.png" width="170" height="70" className="d-inline-block align-top" />{" "}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/Usuario">Clientes</Nav.Link>
            <Nav.Link href="/Pedidos">Pedidos</Nav.Link>
            <Nav.Link href="/Produtos">Produtos</Nav.Link>
            </Nav>
          <Nav>
          <Nav.Link href="/Perfil">Meu perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}

export default NavbarInicial