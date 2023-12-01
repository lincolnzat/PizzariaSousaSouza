import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FazerPedido from "../Componentes/FazerPedido";

const pizzas = [
  {
    id: 1,
    image: "../public/img/pepperoni.png",
    sabor: "Pepperoni",
    valor: 26,
    desc: "Fatias de pepperoni servidas sobre camada de queijo e molho de tomate.",
    
  },
  {
    id: 2,
    image: "../public/img/frangorequeijao.png",
    sabor: "Frango com requeijão",
    valor: 24,
    desc: "Frango, queijo e requeijão cremoso."
  },

  {
    id: 3,
    image: "../public/img/pizzabrasileira.png",
    sabor: "Brasileira",
    valor: 29,
    desc: "Molho de tomate, queijo , requeijão, presunto e azeitonas verdes.",
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
            <Card.Img variant="top" src={pizza.image} />
            <Card.Body>
              <Card.Title>{pizza.sabor} - R${pizza.valor}</Card.Title>
              <Card.Text>
                <p className="textocard">{pizza.desc}</p>
                <FazerPedido/>
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
