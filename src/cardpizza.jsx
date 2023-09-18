import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const pizzas = [
  {
    id: 1,
    sabor: "Portuguesa",
    valor: 40,
  },
  {
    id: 2,
    sabor: "Paulista",
    valor: 30,
  },
];

function Pizzas() {
  const [count, setCount] = useState(0);

  return (
    <div>
         <Container>
         <Row xs={3} md={3} className="g-4">
         {pizzas.map((pizza, index) => (
          <Col key={pizza.id}>
            <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{pizza.sabor}</Card.Title>
              <Card.Text>
                R$ {pizza.valor}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
         ))}
          </Row>
          </Container>
        </div>
      );
}

export default Pizzas;
