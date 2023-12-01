import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FazerPedido from "../Componentes/FazerPedido";


const entradinhas = [
  {
    id: 1,
    image: "../public/img/breadstickpepperoni.png",
    sabor: "Breadsticks de Pepperoni",
    valor: 20,
    desc: "Palitos de massa pan recheados com Pepperoni."
    
  },
  {
    id: 2,
    image: "../public/img/breadstickqueijo.png",
    sabor: "Breadsticks de Queijo",
    valor: 16,
    desc: "Palitos de massa pan recheados com Queijo."
  },

  {
    id: 3,
    image: "../public/img/paocalabresa.png",
    sabor: "Pão de Calabresa",
    valor: 16,
    desc: "Pão feito com massa de Pizza, recheado com calabresa."
  },
];

function Entradinhas() {
  const [count, setCount] = useState(0);

  return (
    <div>
         <Container>
         <Row xs={3} md={3} className="g-4">
         {entradinhas.map((entradinha, index) => (
          <Col key={entradinha.id}>
            <Card>
            <Card.Img variant="top" src={entradinha.image} />
            <Card.Body>
              <Card.Title>{entradinha.sabor} - R${entradinha.valor}</Card.Title>
              <Card.Text>
                <p className="textocard">{entradinha.desc}</p>
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

export default Entradinhas;
