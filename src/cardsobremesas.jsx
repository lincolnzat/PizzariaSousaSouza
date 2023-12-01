import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FazerPedido from "../Componentes/FazerPedido";


const sobremesas = [
  {
    id: 1,
    image: "../public/img/sobremesa1.png",
    sabor: "Cup Brigadeiro",
    valor: 7,
    desc: "Brigadeiro feito com Moça® no copinho.",
    
  },
  {
    id: 2,
    image: "../public/img/sobremesa2.png",
    sabor: "Pizza de Brigadeiro",
    valor: 24,
    desc: "Pizza com massa pan feito com brigadeiro Moça®.",
  },

  {
    id: 3,
    image: "../public/img/sobremesa3.png",
    sabor: "Slider de brigadeiro",
    valor: 10,
    desc: "Mini pizza de Brigadeiro feito com brigadeira Moça®.",
  },
];

function Sobremesas() {
  const [count, setCount] = useState(0);

  return (
    <div>
         <Container>
         <Row xs={3} md={3} className="g-4">
         {sobremesas.map((sobremesa, index) => (
          <Col key={sobremesa.id}>
            <Card>
            <Card.Img variant="top" src={sobremesa.image} />
            <Card.Body>
              <Card.Title>{sobremesa.sabor} - R${sobremesa.valor}</Card.Title>
              <Card.Text>
                <p className="textocard">{sobremesa.desc}</p>
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

export default Sobremesas;
