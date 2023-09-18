import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

function Formulario2() {
    return (
        <Container>
          <Row className="justify-content-md-end">
            <Col xs lg="6">
              <p class="formTitulo">Acesse a sua conta!</p>
              <Col xs lg="8">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><p class="formSubtitulo">E-mail</p></Form.Label>
                    <Form.Control type="email" placeholder="Digite o seu e-mail" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><p class="formSubtitulo">Senha</p></Form.Label>
                    <Form.Control type="email" placeholder="Digite a sua senha" />
                  </Form.Group>
                </Form>
                <Row xs lg="2" className="justify-content-md-center">
                  <Button variant="dark">Entrar</Button>
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>

    );
}

export default Formulario2;
