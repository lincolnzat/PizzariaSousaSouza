import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';


function Retangulo() {
    return (
    <Container>
    <Row>
    <Col>
    <div className="retangulo">
    <p>Peça sua pizza em casa ou retire na loja mais próxima!</p>
    <p className="informacao">
    Informe seu endereço para encontrarmos a pizzaria mais próxima
    de você.
    </p>
    <Form.Control className='w-50 mt-3' type="text" placeholder="Informar endereço e número" />
    </div> 
    </Col>
    </Row>
    </Container>
    );

    
}

export default Retangulo

