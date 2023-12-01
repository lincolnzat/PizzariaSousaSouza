import { useEffect, useState } from "react";
import NavbarInicial from '../Componentes/NavbarInicial';
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ModalProduto from "../Componentes/ModalProduto";
import Footer from "../Componentes/Footer";


function Produtos() {
  const [produtos, setProdutos] = useState([]);

  function data() {
    fetch("http://localhost/Slim/api/produtos")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <NavbarInicial />
      <Container>
        <div className="circulo3"></div>
        <h3 className="d-flex justify-content-center mt-4 produtostitulo">Produtos</h3>
        <br />
         <Row xs={4} md={4} className="g-4">
          {produtos.map((produto) => (
            <Col key={produto.ID}>
              <Card style={{ width: '20rem' }} className="cardproduto">
              <Card.Img variant="top" src={produto.imgproduto} />
                <Card.Body>
                  <Card.Title>
                    {produto.NOME} - R${produto.PRECO_VENDA}
                  </Card.Title>
                  <Card.Text>
                    <p className="textocard">{produto.DESCRICAO}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Produtos;
