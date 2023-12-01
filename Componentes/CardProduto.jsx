import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalProduto from '../Componentes/ModalProduto';

function CardProduto() {
  return (
    <Card className="cardperfil" style={{ width: '20rem' }}>
      <Card.Img className="arredondar" variant="top" src="/src/assets/img/ComidasS.png" />
      <Card.Body >
      <Card.Title className="centralizar">Produtos</Card.Title>
        <Card.Text className="fonteCard centralizar">
          <ModalProduto/>
        </Card.Text>
       </Card.Body>
    </Card>
  );
}

export default CardProduto;