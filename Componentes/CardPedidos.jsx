import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalPedidos from '../Componentes/ModalPedidos';

function CardPedidos() {
  return (
    <Card className="cardperfil" style={{ width: '20rem' }}>
      <Card.Img className="arredondar" variant="top" src="/src/assets/img/Pedidos.png" />
      <Card.Body >
      <Card.Title className="centralizar">Pedidos</Card.Title>
        <Card.Text className="fonteCard centralizar">
          <ModalPedidos/>
        </Card.Text>
       </Card.Body>
    </Card>
  );
}

export default CardPedidos;