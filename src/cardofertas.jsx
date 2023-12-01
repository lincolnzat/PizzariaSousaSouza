import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const ofertas = [
  {
    id: 1,
    image: "../public/img/pizzabanner.jpg",
    sabor: "Portuguesa",
    valor: 40,
    
  },
  {
    id: 2,
    image: "../public/img/oferta1.png",
    sabor: "Paulista",
    valor: 30,
  },

  {
    id: 3,
    image: "../public/img/oferta2.jpg",
    sabor: "Paulista",
    valor: 30,
  },
];

function Ofertas() {
  const [count, setCount] = useState(0);

  return (
    <div>
         <Container>
         <Row xs={3} md={3} className="g-4">
         {ofertas.map((oferta, index) => (
          <Col key={oferta.id}>
            <Card>
            <Card.Img variant="top" src={oferta.image} />
            </Card>
          </Col>
         ))}
          </Row>
          </Container>
        </div>
      );
}

export default Ofertas;
