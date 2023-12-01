import {useEffect, useState} from "react";
import NavbarInicial from '../Componentes/NavbarInicial';
import CirculoPrincipal from "../Componentes/CirculoPrincipal";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Col} from "react-bootstrap";
import Footer from "../Componentes/Footer";

function Usuario() {
    const [clientes, setClientes] = useState([]);

    function data() {
        fetch('http://localhost/Slim/api/clientes')
        .then((response) => response.json())
        .then((json) => setClientes(json))
    }

    useEffect(() => {
        data();
    }, []);

    return (
        <div>
            <NavbarInicial/>
            <Container>
            <Row className="justify-content-md-center">
            <CirculoPrincipal />
            <h3 className="d-flex justify-content-center mt-4 produtostitulo">Clientes</h3>
            </Row>
            <Row xs={4} md={4} className="g-4">
            {clientes.map((cliente) => (
            <Col key={cliente.ID}>
            <Card className="cardperfil" style={{ width: '20rem' }}>
              <Card.Img className="arredondar" variant="top" src="/src/assets/img/chef.png" />
                <Card.Body>
                  <Card.Title className="centralizar">{cliente.nm_usuario}</Card.Title>
                  <Card.Title className="centralizar">{cliente.nm_email}</Card.Title>
                  <Card.Text className="fonteCard2 centralizar">
                   {cliente.ds_cidade}
                </Card.Text>
                  <Card.Text className="fonteCard2 centralizar">
                    Endereço: {cliente.ds_endereco}
                </Card.Text>
                  <Card.Text className="fonteCard2 centralizar">
                    Estado: {cliente.ds_estado}
                </Card.Text>
                 </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
            </Container>
            <Col className="desca4">
            <Footer/>
            </Col>
            </div>
    )
}

export default Usuario