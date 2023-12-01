import { useEffect, useState } from "react";
import NavbarInicial from '../Componentes/NavbarInicial';
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../Componentes/Footer";



function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  function data() {
    fetch("http://localhost/Slim/api/pedidos")
      .then((response) => response.json())
      .then((json) => setPedidos(json));
  }

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <NavbarInicial />
      <Container>
        <div className="circulo3"></div>
        <h3 className="d-flex justify-content-center mt-4 produtostitulo">Pedidos</h3>
        <br />
        <Row xs={4} md={4} className="g-4">
        {pedidos.map((pedido) => (
            <Col key={pedido.ID}>
            <Card className="cardperfil" style={{ width: '20rem' }}>
              <Card.Img className="arredondar" variant="top" src="/src/assets/img/Pedidos.png" />
                <Card.Body>
                  <Card.Title className="centralizar">Cliente: {pedido.nm_cliente}</Card.Title>
                  <Card.Title className="centralizar">Pedido: {pedido.nm_pedido} - R$ {pedido.ds_preco}</Card.Title>
                  <Card.Text className="fonteCard2 centralizar">
                    Descrição: {pedido.ds_pedido}
                </Card.Text>
                  <Card.Text className="fonteCard2 centralizar">
                    Endereço: {pedido.ds_endereco}
                </Card.Text>
                  <Card.Text className="fonteCard2 centralizar">
                    Data de entrega: {pedido.dt_entrega}
                </Card.Text>
                  <Card.Text className="fonteCard2 centralizar">
                    Telefone: {pedido.ds_telefone}
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Col className="desca3">
      <Footer/>
      </Col>
    </div>
  );
}

export default Pedidos;

