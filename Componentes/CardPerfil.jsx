import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPerfil() {
  return (
    <Card className="cardperfil" style={{ width: '20rem' }}>
      <Card.Img className="arredondar" variant="top" src="/src/assets/img/thelastmitada.png" />
      <Card.Body >
        <Card.Title className="centralizar">Lincoln Vinícius</Card.Title>
        <Card.Text className="fonteCard centralizar">
          <Button variant="danger">Administrador</Button>
        </Card.Text>
       </Card.Body>
    </Card>
  );
}

export default CardPerfil;