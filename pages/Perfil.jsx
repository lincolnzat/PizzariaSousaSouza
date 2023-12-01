import NavbarInicial from "../Componentes/NavbarInicial";
import CardPerfil from "../Componentes/CardPerfil";
import CirculoPrincipal from "../Componentes/CirculoPrincipal";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import CardCliente from "../Componentes/CardCliente";
import CardProduto from "../Componentes/CardProduto";
import CardPedidos from "../Componentes/CardPedidos";
import Stack from 'react-bootstrap/Stack';
import Footer from "../Componentes/Footer";
import {Col} from "react-bootstrap";



function Perfil() {
    return (
        <div>
            <NavbarInicial/>
            <Container>
            <Row className="justify-content-md-center">
          <CirculoPrincipal />
            </Row>
            </Container>
            <Container >
            <Row className="justify-content-md-center">
            <CardPerfil/>
            </Row>
            <Stack direction="horizontal" gap={4} className="justify-content-md-center g-4 ">
            <CardCliente/>
            <CardProduto/>
            <CardPedidos/>
            </Stack>
            </Container>
            <Col className="desca">
            <Footer/>
            </Col>
            </div>
    );
}

export default Perfil;