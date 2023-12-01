import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalCliente from './ModalCliente';

function CardCliente() {
  return (
    <Card className="cardperfil" style={{ width: '20rem' }}>
      <Card.Img variant="top" className="arredondar" src="/src/assets/img/chef.png" />
      <Card.Body >
      <Card.Title className="centralizar">Clientes</Card.Title>
        <Card.Text className="fonteCard centralizar">
          <ModalCliente/>
        </Card.Text>
       </Card.Body>
    </Card>
  );
}

export default CardCliente;